using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TestController : ParentController
    {
        // GET api/Messages
        [HttpGet]
        public IActionResult get()
        {
            return Ok(new {message = "You reached the endpoint!"});
        }
    }
}