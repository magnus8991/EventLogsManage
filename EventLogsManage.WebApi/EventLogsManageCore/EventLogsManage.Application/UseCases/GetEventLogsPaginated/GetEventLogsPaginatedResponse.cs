using EventLogsManage.Application.UseCases.GetEventLogsPaginated.DTOs;
using EventLogsManage.Domain.Base;

namespace EventLogsManage.Application.UseCases.GetEventLogsPaginated;

public class GetEventLogsPaginatedResponse
{
    public ResponseWithPagination<IEnumerable<GetEventLogsPaginatedDTO>>? GetSubscriptionsPaginated { get; set; }
}