using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using MediatR;
using Persistence;

namespace Application.Messages
{
    public class Details
    {
        public class Query : IRequest<Message>
        {
            public int Id { get; set; }
        }
        
        public class Handler : IRequestHandler<Query, Message>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Message> Handle(Query request, CancellationToken cancellationToken)
            {
                var message = await _context.Message.FindAsync(request.Id);

                if (message == null)
                    throw new RestException(HttpStatusCode.NotFound, new{Message = "Not Found" });

                return message;
            }
        }
    }
}