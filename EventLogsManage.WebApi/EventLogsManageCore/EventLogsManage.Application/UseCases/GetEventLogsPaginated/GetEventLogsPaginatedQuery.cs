using EventLogsManage.Application.Base;
using EventLogsManage.Application.UseCases.GetEventLogsPaginated.DTOs;
using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Domain.Enums;
using EventLogsManage.Domain.Specifications;
using MediatR;
using System.Net;

namespace EventLogsManage.Application.UseCases.GetEventLogsPaginated;

public class GetEventLogsPaginatedQuery(IEventLogRepository eventLogRepository) : IRequestHandler<GetEventLogsPaginatedRequest, ResponseBase<GetEventLogsPaginatedResponse>>
{
    private readonly IEventLogRepository _eventLogRepository = eventLogRepository;

    public async Task<ResponseBase<GetEventLogsPaginatedResponse>> Handle(GetEventLogsPaginatedRequest request, CancellationToken cancellationToken)
    {
        EventLogsByFilterSpec specification = new(request.InitialDate, request.FinalDate, request.EventType, request.Page, request.PageSize);
        List<EventLogEntity> eventLogs = await _eventLogRepository.ListAsync(specification, cancellationToken);
        int totalRecords = await _eventLogRepository.CountAsync(specification, cancellationToken);

        return new ResponseBase<GetEventLogsPaginatedResponse>()
        {
            CodeId = (int)HttpStatusCode.OK,
            Data = new()
            {
                GetSubscriptionsPaginated = new()
                {
                    Pagination = new()
                    {
                        PageNumber = request.Page,
                        PageSize = request.PageSize,
                        TotalElements = totalRecords
                    },
                    Data = MapResponse(eventLogs!)
                }
            }
        };
    }

    private IEnumerable<GetEventLogsPaginatedDTO> MapResponse(List<EventLogEntity> eventLogs)
    {
        return eventLogs.Select(eventLog => new GetEventLogsPaginatedDTO()
        {
            EventLogId = eventLog.EventLogId,
            Description = eventLog.Description,
            EventType = eventLog.EventType is EventType.Api ? "API" : "Formulario de eventos manuales",
            EventDate = eventLog.EventDate
        });
    }
}