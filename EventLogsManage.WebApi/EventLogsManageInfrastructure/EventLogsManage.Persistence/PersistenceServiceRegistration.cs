using EventLogsManage.Domain.Base;
using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Persistence.Context;
using EventLogsManage.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EventLogsManage.Persistence;

public static class PersistenceServiceRegistration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services)
    {
        string databaseConnectionString = Config.Instance.DatabaseConnectionString;
        services.AddDbContext<EventLogsManageDBContext>(options =>
            options.UseMySQL(databaseConnectionString, x => x.MigrationsHistoryTable("EFMigrationsHistory")))
                .AddTransient<IEventLogRepository, EventLogRepository>()
                .AddTransient<IUserRepository, UserRepository>();
        return services;
    }
}