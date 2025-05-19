using EventLogsManage.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EventLogsManage.Persistence.Configuration
{
    public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public virtual void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.HasKey(x => x.Identification);
        }
    }
}