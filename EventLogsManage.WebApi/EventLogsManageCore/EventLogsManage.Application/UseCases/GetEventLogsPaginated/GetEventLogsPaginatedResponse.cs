using EventLogsManage.Application.UseCases.GetEventLogsPaginated.DTOs;
using EventLogsManage.Domain.Base;

namespace EventLogsManage.Application.UseCases.GetEventLogsPaginated;

public class GetEventLogsPaginatedResponse: ResponseWithPagination<IEnumerable<GetEventLogsPaginatedDTO>>;