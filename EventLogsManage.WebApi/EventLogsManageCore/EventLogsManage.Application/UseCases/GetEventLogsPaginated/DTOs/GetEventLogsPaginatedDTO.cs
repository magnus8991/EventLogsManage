namespace EventLogsManage.Application.UseCases.GetEventLogsPaginated.DTOs
{
    public record GetEventLogsPaginatedDTO
    {
        public Guid EventLogId { get; init; }
        public string? Description { get; init; }
        public required string EventType { get; init; }
        public DateTimeOffset EventDate { get; init; }
    }
}