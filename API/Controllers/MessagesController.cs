using Microsoft.AspNetCore.Mvc;
using MediatR;
using Domain;
using System.Threading.Tasks;
using Application.Messages;
using System.Collections.Generic;

namespace API.Controllers
{
    public class MessagesController : ParentController
    {
        // GET api/Messages
        [HttpGet]
        public async Task<ActionResult<List<Message>>> List()
        {
            return await Mediator.Send(new List.Query());
        }

        // GET api/Messages/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Message>> Details(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        // POST api/Messages
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        // DELETE api/Messages/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await Mediator.Send(new Delete.Command{Id = id});
        }
    }
}