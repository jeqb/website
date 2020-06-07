using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Infrastructure.Security;
using System.ComponentModel.DataAnnotations;
using Application.Errors;
using System.Net;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<ReturnUser>
        {
            [Required]
            public string Email { get; set; }
            [Required]
            public string Password { get; set; }
        }
        public class Handler : IRequestHandler<Query, ReturnUser>
        {
            private readonly DataContext _context;
            private readonly IPasswordTool _passwordTool;
            private readonly IJwtTool _jwtTool;

            public Handler(DataContext context, IPasswordTool passwordTool, IJwtTool jwtTool)
            {
                _jwtTool = jwtTool;
                _context = context;
                _passwordTool = passwordTool;
            }

            // public async Task<ReturnUser> Handle(Query request, CancellationToken cancellationToken)
            public ReturnUser Handle(Query request, CancellationToken cancellationToken)
            {
                if (_context.Database.CanConnect())
                {
                    throw new Exception("Can Connect to database");
                }
                else
                {
                    throw new Exception("Can NOT Connect to database");
                }

                /*
                // poor implementation to search by email addres, but it works for now
                var userResult = await _context.AppUser.ToArrayAsync();

                if (userResult.Length == 0)
                    throw new RestException(HttpStatusCode.Unauthorized);

                for (int i = 0; i < userResult.Length; i++)
                {
                    var user = userResult[i];

                    if (user.Email == request.Email)
                    {
                        var sucess = _passwordTool.ValidatePassword(request.Password, user.Salt, user.PasswordHash);
                        if (sucess)
                        {
                            return new ReturnUser
                            {
                                UserName = user.UserName,
                                Email = user.Email,
                                DisplayName = user.DisplayName,
                                Token = _jwtTool.CreateToken(user)
                            };
                        };
                    }
                }

                throw new RestException(HttpStatusCode.Unauthorized);
                */
            }
        }
    }
}