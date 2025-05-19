using EventLogsManage.Domain.Base;
using EventLogsManage.Domain.Entities;

namespace EventLogsManage.Domain.Contracts.Persistence.Repositories;

public interface IEventLogRepository : IGenericRepository<EventLogEntity>;
