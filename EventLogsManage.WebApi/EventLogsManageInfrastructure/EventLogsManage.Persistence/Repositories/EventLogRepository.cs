﻿using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Persistence.Base;
using EventLogsManage.Persistence.Context;

namespace EventLogsManage.Persistence.Repositories;

public class EventLogRepository(EventLogsManageDBContext context) : GenericRepository<EventLogEntity>(context), IEventLogRepository
{
}