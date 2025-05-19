using EventLogsManage.Application.Base;
using System.Net;

namespace EventLogsManage.Application.Extensions;

public static class GenericResponse
{
    public static ResponseBase Ok(string? message = default) => new() { CodeId = (int)HttpStatusCode.OK, Message = message ?? "OK" };
    public static ResponseBase<T> Ok<T>(T? data, string? message = default) => new() { CodeId = (int)HttpStatusCode.OK, Message = message ?? "OK", Data = data };
    public static ResponseBase BadRequest(string? message = default) => new() { CodeId = (int)HttpStatusCode.BadRequest, Message = message ?? "Bad Request" };
    public static ResponseBase<T> BadRequest<T>(T? data, string? message = default) => new() { CodeId = (int)HttpStatusCode.BadRequest, Message = message ?? "Bad Request", Data = data };
    public static ResponseBase InternalError(string? message = default) => new() { CodeId = (int)HttpStatusCode.InternalServerError, Message = message ?? "Internal Error" };
    public static ResponseBase<T> InternalError<T>(T? data, string? message = default) => new() { CodeId = (int)HttpStatusCode.InternalServerError, Message = message ?? "Internal Error", Data = data };
}
