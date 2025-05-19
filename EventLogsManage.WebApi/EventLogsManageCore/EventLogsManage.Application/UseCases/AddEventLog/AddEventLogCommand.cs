using EventLogsManage.Application.Base;
using EventLogsManage.Application.Services.ExceptionGenerator;
using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Domain.Entities;
using FluentValidation;
using MediatR;
using System.Net;

namespace EventLogsManage.Application.UseCases.AddEventLog;

public class AddEventLogCommand(IEventLogRepository eventLogRepository,
    IExceptionGeneratorService exceptionGeneratorService) : IRequestHandler<AddEventLogRequest, ResponseBase<AddEventLogResponse>>
{
    private readonly IExceptionGeneratorService _exceptionGeneratorService = exceptionGeneratorService;
    private readonly IEventLogRepository _eventLogRepository = eventLogRepository;

    public async Task<ResponseBase<AddEventLogResponse>> Handle(AddEventLogRequest request, CancellationToken cancellationToken)
    {
        EventLogEntity eventLog = new()
        {
            EventLogId = Guid.NewGuid(),
            Description = request.Description!,
            EventType = request.EventType!.Value,
            EventDate = request.EventDate!.Value.Date,
            CreateDate = DateTimeOffset.Now.Date
        };
        try
        {
            await _eventLogRepository.AddAsync(eventLog, cancellationToken);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            _exceptionGeneratorService.GenerateException("Ocurrió un error al intentar registrar el log", "Servidor");
        }

        return new ResponseBase<AddEventLogResponse>()
        {
            CodeId = (int)HttpStatusCode.OK,
            Data = new() { EventoLogId = eventLog.EventLogId },
            Message = "¡Evento registrado con éxito!"
        };
    }
}