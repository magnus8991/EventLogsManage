using System.Diagnostics.CodeAnalysis;

namespace EventLogsManage.Application.Services.ExceptionGenerator;

public interface IExceptionGeneratorService
{
    [DoesNotReturn] void GenerateException(string message, string? propertyName = null);
}
