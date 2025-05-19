using EventLogsManage.Application.Base;
using EventLogsManage.Domain.Enums;
using MediatR;

namespace EventLogsManage.Application.UseCases.AddEventLog;

public record AddEventLogRequest(string? Description, DateTimeOffset? EventDate, EventType? EventType = EventType.Api) : 
    IRequest<ResponseBase<AddEventLogResponse>>;