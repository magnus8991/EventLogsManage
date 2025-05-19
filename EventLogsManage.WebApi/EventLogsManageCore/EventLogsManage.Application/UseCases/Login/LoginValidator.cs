using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Domain.Entities;
using EventLogsManage.Domain.Specifications;
using FluentValidation;
using FluentValidation.Results;

namespace EventLogsManage.Application.UseCases.Login;

public class LoginValidator : AbstractValidator<LoginRequest>
{
    private readonly IUserRepository _userRepository;
    public UserEntity? User { get; set; }

    public LoginValidator(IUserRepository userRepository)
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

            if (string.IsNullOrWhiteSpace(request.Password))
            {
                context.AddFailure(CreateValidationFailure("Campo obligatorio", nameof(request.Password)));
                failed = true;
            }

            if (failed) return;

            if (!await ExistsUserAsync(request.Identification!, request.Password!, cancellationToken))
            {
                context.AddFailure(CreateValidationFailure("Nombre de usuario o contraseña incorrecto(a)", nameof(request.Identification)));
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

    private async Task<bool> ExistsUserAsync(string identification, string password, CancellationToken cancellationToken)
    {
        UserByIdentificationAndPasswordSpec specification = new(identification, password);
        UserEntity? User = await _userRepository.SingleOrDefaultAsync(specification, cancellationToken);
        return User is not null;
    }
}