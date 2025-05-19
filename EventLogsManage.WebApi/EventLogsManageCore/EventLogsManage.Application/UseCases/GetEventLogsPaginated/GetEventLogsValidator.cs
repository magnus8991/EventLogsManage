using FluentValidation;
using FluentValidation.Results;

namespace EventLogsManage.Application.UseCases.GetEventLogsPaginated;

public class GetEventLogsValidator : AbstractValidator<GetEventLogsPaginatedRequest>
{
    public GetEventLogsValidator()
    {
        RuleFor(x => x).Custom((model, context) =>
        {
            if (model.Page <= 0)
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(model.Page)));
            }

            if (model.PageSize <= 0)
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(model.PageSize)));
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