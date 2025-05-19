using Ardalis.Specification;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Domain.Enums;

namespace EventLogsManage.Domain.Specifications;

public sealed class UserByIdentificationAndPasswordSpec : Specification<UserEntity>, ISingleResultSpecification<UserEntity>
{
    public UserByIdentificationAndPasswordSpec(string? identification, string? password)
    {
        Query.Where(user => user.Identification == identification && user.Password == password);
    }
}