using FluentValidation;
using FluentValidation.Results;

namespace EventLogsManage.Application.UseCases.AddEventLog;

public class AddEventLogValidator : AbstractValidator<AddEventLogRequest>
{
    public AddEventLogValidator()
    {
        RuleFor(request => request).Custom((request, context) =>
        {
            if (string.IsNullOrWhiteSpace(request.Description))
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(request.Description)));
            }

            if ((request.EventDate ?? DateTimeOffset.MinValue) == DateTimeOffset.MinValue)
            {
                context.AddFailure(CreateValidationFailure("Debe registrar una fecha de evento válida", nameof(request.EventDate)));
            }
        });
    }

    private ValidationFailure CreateValidationFailure(string errorMessage, string propertyName = "")
    {
        return new ValidationFailure
        {
            PropertyName = propertyName,
            ErrorMessage = errorMessage
        };
    }
}