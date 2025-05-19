namespace EventLogsManage.Application.Base;

public record ResponseBase
{
    public int CodeId { get; init; } = 200;
    public string Message { get; init; } = "¡Operación exitosa!";
}

public record ResponseBase<T> : ResponseBase
{
    public T? Data { get; init; }
}
