using EventLogsManage.Application.UseCases.AddEventLog;
using EventLogsManage.Application.UseCases.GetEventLogsPaginated;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EventLogsManage.Controllers.v1;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]

public class EventLogController(IMediator mediator) : ControllerBase
{
    private readonly IMediator _mediator = mediator;

    [HttpPost]
    public async Task<IActionResult> SaveEventLogAsync([FromBody] AddEventLogRequest request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.CodeId, response);
    }

    [HttpPost("list")]
    public async Task<IActionResult> GetEventLogsPaginatedAsync([FromBody] GetEventLogsPaginatedRequest request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.CodeId, response);
    }
}