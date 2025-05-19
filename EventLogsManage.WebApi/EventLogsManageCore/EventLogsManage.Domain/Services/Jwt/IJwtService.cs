using EventLogsManage.Domain.Entities;

namespace EventLogsManage.Domain.Services.Jwt;

public interface IJwtService
{
    string GenerateToken(UserEntity user);
}