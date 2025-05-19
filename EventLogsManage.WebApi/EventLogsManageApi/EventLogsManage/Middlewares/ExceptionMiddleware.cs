using EventLogsManage.Application.Extensions;
using EventLogsManage.Domain.Constants;
using FluentValidation;
using FluentValidation.Results;

namespace EventLogsManage.Middlewares;

public class ExceptionMiddleware(RequestDelegate next)
{
    private const string CONTENT_TYPE = "application/json";

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await next(httpContext);
        }
        catch (ValidationException ex)
        {
            await HandleExceptionAsync(httpContext, ex);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"[{ex.GetType()}] {ex}");
            if (ex.InnerException is ValidationException validationException)
            {
                await HandleExceptionAsync(httpContext, validationException);
            }
            else
            {
                await HandleExceptionAsync(httpContext);
            }
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, ValidationException exception)
    {
        const string VALIDATION_ERROR_MESSAGE = "Se han presentado algunos errores de validación, por favor revise los datos y vuelva a realizar la operación.";
        var response = GenericResponse.BadRequest(exception.Errors, VALIDATION_ERROR_MESSAGE);

        context.Response.ContentType = CONTENT_TYPE;
        context.Response.StatusCode = response.CodeId;

        return context.Response.WriteAsJsonAsync(response);
    }

    private static Task HandleExceptionAsync(HttpContext context)
    {
        var response = GenericResponse.InternalError<IEnumerable<ValidationFailure>>([new("Servidor", Constants.SERVER_ERROR_MESSAGE)
        {
            ErrorCode = Constants.SERVER_ERROR_CODE
        }], Constants.SERVER_ERROR_MESSAGE);

        context.Response.ContentType = CONTENT_TYPE;
        context.Response.StatusCode = response.CodeId;

        return context.Response.WriteAsJsonAsync(response);
    }
}
