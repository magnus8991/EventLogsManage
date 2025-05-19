using EventLogsManage.Domain.Services.Jwt;
using Microsoft.Extensions.DependencyInjection;

namespace EventLogsManage.Domain;

public static class DomainServiceRegistration
{
    public static IServiceCollection AddDomainServices(this IServiceCollection services)
    {
        return services
            .AddTransient<IJwtService, JwtService>();
    }
}
