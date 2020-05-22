using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Infrastructure.Interfaces;
using System.ComponentModel.DataAnnotations;
using Application.Errors;
using System.Net;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<AppUser>
        {
            [Required]
            public string Email { get; set; }
            [Required]
            public string Password { get; set; }
        }
        public class Handler : IRequestHandler<Query, AppUser>
        {
            private readonly DataContext _context;
            private readonly IPasswordTool _passwordTool;

            public Handler(DataContext context, IPasswordTool passwordTool)
            {
                _context = context;
                _passwordTool = passwordTool;
            }

            public async Task<AppUser> Handle(Query request, CancellationToken cancellationToken)
            {
                // poor implementation to search by email addres, but it works for now
                var userResult = await _context.AppUser.ToArrayAsync();

                if (userResult.Length == 0)
                    throw new RestException(HttpStatusCode.Unauthorized);

                for (int i = 0; i < userResult.Length; i ++)
                {
                    var user = userResult[i];

                    if (user.Email == request.Email)
                    {
                        var sucess = _passwordTool.ValidatePassword(request.Password, user.Salt, user.PasswordHash);
                        if (sucess)
                            return user;
                    }
                }

                throw new RestException(HttpStatusCode.Unauthorized);
            }
        }
    }
}