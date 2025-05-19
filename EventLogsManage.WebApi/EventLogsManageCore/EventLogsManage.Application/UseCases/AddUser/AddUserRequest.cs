using EventLogsManage.Application.Base;
using EventLogsManage.Domain.Enums;
using MediatR;

namespace EventLogsManage.Application.UseCases.AddUser;

public record AddUserRequest(string? Identification, string? Name, string? Password) : IRequest<ResponseBase<AddUserResponse>>;