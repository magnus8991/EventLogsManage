using EventLogsManage.Domain.Base;
using EventLogsManage.Domain.Enums;

namespace EventLogsManage.Domain.Entities;

public class EventLogEntity : BaseEntity
{
    public Guid EventLogId { get; set; }
    public required string Description { get; set; }
    public EventType EventType { get; set; }
    public DateTimeOffset EventDate { get; set; }
    public DateTimeOffset CreateDate { get; set; }
}