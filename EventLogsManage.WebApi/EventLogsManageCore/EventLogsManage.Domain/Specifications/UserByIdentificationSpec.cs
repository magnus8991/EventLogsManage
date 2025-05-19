using Ardalis.Specification;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Domain.Enums;

namespace EventLogsManage.Domain.Specifications;

public sealed class UserByIdentificationSpec : Specification<UserEntity>, ISingleResultSpecification<UserEntity>
{
    public UserByIdentificationSpec(string? identification)
    {
        Query.Where(user => user.Identification == identification);
    }
}