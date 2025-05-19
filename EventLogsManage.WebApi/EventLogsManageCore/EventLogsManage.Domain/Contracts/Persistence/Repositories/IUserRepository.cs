using EventLogsManage.Domain.Base;
using EventLogsManage.Domain.Entities;

namespace EventLogsManage.Domain.Contracts.Persistence.Repositories;

public interface IUserRepository : IGenericRepository<UserEntity>;