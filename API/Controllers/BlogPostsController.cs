using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Domain;
using MediatR;
using Application.BlogPosts;

namespace API.Controllers
{
    public class BlogPostsController : ParentController
    {

        // GET api/BlogPosts
        [HttpGet]
        public async Task<ActionResult<List<BlogPost>>> List()
        {
            return await Mediator.Send(new List.Query());
        }

        // GET api/BlogPosts/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost>> Details(int id)
        {
            return await Mediator.Send( new Details.Query{Id = id});
        }

        // POST api/BlogPosts
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        // PUT api/BlogPosts/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }

        // DELETE api/BlogPosts/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await Mediator.Send(new Delete.Command{Id = id});
        }
    }
}