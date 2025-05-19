namespace EventLogsManage.Application.UseCases.Login;

public record LoginResponse
{
    public required string Name { get; set; }
    public required string Token { get; set; }
}