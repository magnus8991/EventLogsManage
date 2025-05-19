using EventLogsManage.Application.Base;
using EventLogsManage.Domain.Enums;
using MediatR;

namespace EventLogsManage.Application.UseCases.Login;

public record LoginRequest(string? Identification, string? Password) : IRequest<ResponseBase<LoginResponse>>;