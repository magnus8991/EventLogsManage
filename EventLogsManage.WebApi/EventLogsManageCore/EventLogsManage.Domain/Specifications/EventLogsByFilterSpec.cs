using Ardalis.Specification;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Domain.Enums;

namespace EventLogsManage.Domain.Specifications;

public sealed class EventLogsByFilterSpec : Specification<EventLogEntity>
{
    public EventLogsByFilterSpec(DateTimeOffset? initialDate, DateTimeOffset? finalDate, EventType? eventType, int page, int pageSize)
    {
        int skip = (page - 1) * pageSize;

        if (initialDate.HasValue) Query.Where(eventLog => eventLog.EventDate >= initialDate);

        if (finalDate.HasValue) Query.Where(eventLog => eventLog.EventDate <= finalDate);

        if (eventType.HasValue) Query.Where(eventLog => eventLog.EventType == eventType);

        Query
            .OrderByDescending(subscription => subscription.EventDate)
            .Skip(skip)
            .Take(pageSize);
    }
}