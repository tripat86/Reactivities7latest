using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController: ControllerBase
    {
        private IMediator _mediator;

        // because this is a shared controller so if _mediator is already created and available for other controllers then use it else create it
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();  

    }
}