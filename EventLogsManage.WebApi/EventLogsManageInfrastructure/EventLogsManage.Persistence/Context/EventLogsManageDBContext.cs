using EventLogsManage.Domain.Entities;
using EventLogsManage.Persistence.Configuration;
using Microsoft.EntityFrameworkCore;

namespace EventLogsManage.Persistence.Context;

public class EventLogsManageDBContext(DbContextOptions<EventLogsManageDBContext> options) : DbContext(options)
{
    public DbSet<EventLogEntity> EventLogs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(EventLogEntityConfiguration).Assembly);
    }
}