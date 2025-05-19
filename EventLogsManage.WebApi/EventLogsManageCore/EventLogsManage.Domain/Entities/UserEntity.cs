using EventLogsManage.Domain.Base;
using EventLogsManage.Domain.Enums;

namespace EventLogsManage.Domain.Entities;

public class UserEntity : BaseEntity
{
    public required string Identification { get; set; }
    public required string Name { get; set; }
    public required string Password { get; set; }
    public DateTimeOffset CreateDate { get; set; }
}