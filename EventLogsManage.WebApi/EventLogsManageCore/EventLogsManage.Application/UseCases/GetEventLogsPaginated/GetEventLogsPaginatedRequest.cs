using EventLogsManage.Application.Base;
using EventLogsManage.Domain.Enums;
using MediatR;

namespace EventLogsManage.Application.UseCases.GetEventLogsPaginated;

public class GetEventLogsPaginatedRequest : IRequest<ResponseBase<GetEventLogsPaginatedResponse>>
{
    public DateTimeOffset? InitialDate { get; init; }
    public DateTimeOffset? FinalDate { get; init; }
    public EventType? EventType { get; init; }
    public short Page { get; set; }
    public short PageSize { get; set; }
}