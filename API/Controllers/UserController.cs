using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : ParentController
    {
        [HttpPost("login")]
        public async Task<ActionResult<ReturnUser>> Login(Login.Query query)
        {
            return await Mediator.Send(query);
        }
    }
}