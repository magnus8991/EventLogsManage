using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EventLogsManage.Controllers.v1;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]

public class LoginController(IMediator mediator) : ControllerBase
{
    private readonly IMediator _mediator = mediator;

    [HttpPost]
    public async Task<IActionResult> LoginAsync([FromBody] Application.UseCases.Login.LoginRequest request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.CodeId, response);
    }
}