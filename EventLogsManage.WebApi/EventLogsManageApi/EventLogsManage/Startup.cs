using EventLogsManage.Application;
using EventLogsManage.Domain;
using EventLogsManage.Domain.Base;
using EventLogsManage.Middlewares;
using EventLogsManage.Persistence;
using FluentValidation;
using MediatR;
using System.Reflection;
using System.Text.Json;

namespace EventLogsManage;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }
    public const string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

    // This method gets called by the runtime. Use this method to add services to the container
    public void ConfigureServices(IServiceCollection services)
    {
        Config config = Config.Instance;
        services
           .AddControllers()
           .AddJsonOptions(options =>
           {
               options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
           });

        object value = services.AddApiVersioning(options =>
        {
        });

        services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                        policy =>
                        {
                            policy.AllowAnyOrigin()
                                  .AllowAnyMethod()
                                  .AllowAnyHeader();
                        });
        });

        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddPersistenceServices();
        services.AddDomainServices();
        services.AddApplicationServices();
        services.AddHsts(options =>
        {
            options.MaxAge = TimeSpan.FromSeconds(31536000);
        });

        const string ApplicationAssembleName = "EventLogsManage.Application";
        Assembly applicationAssemble = Assembly.Load(ApplicationAssembleName);
        services.AddMediatR(x =>
        {
            x.RegisterServicesFromAssemblies(applicationAssemble);
        });
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidatorPipelineBehavior<,>));
        services.AddValidatorsFromAssembly(applicationAssemble);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        else
        {
            app.UseHsts();
        }
        app.Use(async (context, next) =>
        {
            context.Response.Headers.Append("referrer-policy", "no-referrer");
            await next();
        });
        app.UseHttpsRedirection();
        app.UseMiddleware<ExceptionMiddleware>();
        app.UseHttpsRedirection();
        app.UseRouting();
        app.UseCors(MyAllowSpecificOrigins);
        app.UseAuthorization();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapGet("/", async context =>
            {
                await context.Response.WriteAsync("Welcome to running ASP.NET Core on AWS Lambda");
            });
        });
    }
}