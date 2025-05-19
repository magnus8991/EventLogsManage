using EventLogsManage.Application.Base;
using EventLogsManage.Application.Services.ExceptionGenerator;
using EventLogsManage.Domain.Services.Jwt;
using FluentValidation;
using MediatR;
using System.Net;

namespace EventLogsManage.Application.UseCases.Login;

public class LoginCommand(IValidator<LoginRequest> validator, IJwtService jwtService,
    IExceptionGeneratorService exceptionGeneratorService) : IRequestHandler<LoginRequest, ResponseBase<LoginResponse>>
{
    private readonly LoginValidator _validator = (LoginValidator)validator;
    private readonly IExceptionGeneratorService _exceptionGeneratorService = exceptionGeneratorService;

    public async Task<ResponseBase<LoginResponse>> Handle(LoginRequest request, CancellationToken cancellationToken)
    {
        string token = null!;
        try
        {
            token = jwtService.GenerateToken(_validator.User!);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            _exceptionGeneratorService.GenerateException("Ocurrió un error al intentar iniciar sesión", "Servidor");
        }

        return await Task.FromResult(new ResponseBase<LoginResponse>()
        {
            CodeId = (int)HttpStatusCode.OK,
            Data = new() { Token = token, Name = _validator.User!.Name },
            Message = "¡Inicio de sesión exitoso!"
        });
    }
}