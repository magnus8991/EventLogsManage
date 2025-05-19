using EventLogsManage.Application.Services.ExceptionGenerator;
using Microsoft.Extensions.DependencyInjection;

namespace EventLogsManage.Application
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            return services
                .AddTransient<IExceptionGeneratorService, ExceptionGeneratorService>();
        }
    }
}