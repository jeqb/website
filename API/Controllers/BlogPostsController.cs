using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Domain;
using MediatR;
using Application.BlogPosts;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public BlogPostsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/BlogPosts
        [HttpGet]
        public async Task<ActionResult<List<BlogPost>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        // GET api/BlogPosts/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost>> Details(int id)
        {
            return await _mediator.Send( new Details.Query{Id = id});
        }

        // POST api/BlogPosts
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        // PUT api/BlogPosts/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        // DELETE api/BlogPosts/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}