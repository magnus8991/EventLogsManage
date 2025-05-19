using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Domain.Specifications;
using FluentValidation;
using FluentValidation.Results;

namespace EventLogsManage.Application.UseCases.AddUser;

public class AddUserValidator : AbstractValidator<AddUserRequest>
{
    private readonly IUserRepository _userRepository;

    public AddUserValidator(IUserRepository userRepository)
    {
        _userRepository = userRepository;

        RuleFor(request => request).CustomAsync(async (request, context, cancellationToken) =>
        {
            bool failed = false;

            if (string.IsNullOrWhiteSpace(request.Identification))
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(request.Identification)));
                failed = true;
            }

            if (string.IsNullOrWhiteSpace(request.Name))
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(request.Name)));
                failed = true;
            }

            if (string.IsNullOrWhiteSpace(request.Password))
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(request.Password)));
                failed = true;
            }

            if (failed) return;

            if (await ExistsUserAsync(request.Identification!, cancellationToken))
            {
                context.AddFailure(CreateValidationFailure("Usuario ya existe", nameof(request.Identification)));
            }
        });
    }

    private static ValidationFailure CreateValidationFailure(string errorMessage, string propertyName = "")
    {
        return new ValidationFailure
        {
            PropertyName = propertyName,
            ErrorMessage = errorMessage
        };
    }

    private async Task<bool> ExistsUserAsync(string identification, CancellationToken cancellationToken)
    {
        UserByIdentificationSpec specification = new(identification);
        UserEntity? userEntity = await _userRepository.SingleOrDefaultAsync(specification, cancellationToken);
        return userEntity is not null;
    }
}