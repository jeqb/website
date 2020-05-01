using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Messages
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string MessageContent { get; set; }
            public DateTime MessageDate { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;   
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var message = new Message
                {
                    Name = request.Name,
                    Email = request.Email,
                    MessageContent = request.MessageContent,
                    MessageDate = DateTime.Now
                };

                _context.Message.Add(message);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving data to database");
            }
        }
    }
}