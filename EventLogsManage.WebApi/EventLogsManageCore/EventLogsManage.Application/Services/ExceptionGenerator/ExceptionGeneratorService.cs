using FluentValidation;
using FluentValidation.Results;
using System.Diagnostics.CodeAnalysis;

namespace EventLogsManage.Application.Services.ExceptionGenerator;

internal sealed class ExceptionGeneratorService : IExceptionGeneratorService
{
    [DoesNotReturn]
    public void GenerateException(string message, string? propertyName = null)
    {
        List<ValidationFailure> errors = [new ValidationFailure(propertyName ?? "Servidor", message)];
        throw new ValidationException("", errors);
    }
}
