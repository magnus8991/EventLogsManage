namespace EventLogsManage.Application.UseCases.Login;

public record LoginResponse
{
    public string Token { get; set; }
}