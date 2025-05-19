using EventLogsManage.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EventLogsManage.Persistence.Configuration
{
    public class EventLogEntityConfiguration : IEntityTypeConfiguration<EventLogEntity>
    {
        public virtual void Configure(EntityTypeBuilder<EventLogEntity> builder)
        {
            builder.HasKey(x => x.EventLogId);
        }
    }
}