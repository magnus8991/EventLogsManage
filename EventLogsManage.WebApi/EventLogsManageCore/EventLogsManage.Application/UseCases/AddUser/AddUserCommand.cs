using EventLogsManage.Application.Base;
using EventLogsManage.Application.Services.ExceptionGenerator;
using EventLogsManage.Domain.Contracts.Persistence.Repositories;
using EventLogsManage.Domain.Entities;
using FluentValidation;
using MediatR;
using System.Net;

namespace EventLogsManage.Application.UseCases.AddUser;

public class AddUserCommand(IUserRepository userRepository,
    IExceptionGeneratorService exceptionGeneratorService) : IRequestHandler<AddUserRequest, ResponseBase<AddUserResponse>>
{
    private readonly IExceptionGeneratorService _exceptionGeneratorService = exceptionGeneratorService;
    private readonly IUserRepository _userRepository = userRepository;

    public async Task<ResponseBase<AddUserResponse>> Handle(AddUserRequest request, CancellationToken cancellationToken)
    {
        UserEntity user = new()
        {
            Identification = request.Identification!,
            Name = request.Name!,
            Password = request.Password!,
            CreateDate = DateTimeOffset.Now.Date
        };
        try
        {
            await _userRepository.AddAsync(user, cancellationToken);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            _exceptionGeneratorService.GenerateException("Ocurrió un error al intentar registrar el usuario", "Servidor");
        }

        return new ResponseBase<AddUserResponse>()
        {
            CodeId = (int)HttpStatusCode.OK,
            Data = new() { Identification = user.Identification },
            Message = "¡Usuario registrado con éxito!"
        };
    }
}