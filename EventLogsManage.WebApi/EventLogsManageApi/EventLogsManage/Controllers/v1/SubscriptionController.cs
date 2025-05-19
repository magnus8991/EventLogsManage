using EventLogsManage.Application.UseCases.AddEventLog;
using EventLogsManage.Application.UseCases.GetEventLogsPaginated;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EventLogsManage.Controllers.v1;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]

public class SubscriptionController : ControllerBase
{
    private readonly IMediator _mediator;

    public SubscriptionController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> SaveEventLog([FromBody] AddEventLogRequest request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.CodeId, response);
    }

    [HttpPost("list")]
    public async Task<IActionResult> GetEventLogsPaginated([FromBody] GetEventLogsPaginatedRequest request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.CodeId, response);
    }
}