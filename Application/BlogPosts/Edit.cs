using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using MediatR;
using Persistence;

namespace Application.BlogPosts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Body { get; set; }
            public int? ImageKey { get; set; }
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
                var post = await _context.BlogPost.FindAsync(request.Id);

                if (post == null)
                    throw new RestException(HttpStatusCode.NotFound, new{BlogPost = "Not Found" });

                post.Title = request.Title ?? post.Title;
                post.Body = request.Body ?? post.Body;
                post.ImageKey = request.ImageKey ?? post.ImageKey;
                post.UpdatedDateTime = DateTime.Now;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes to database");
            }
        }
    }
}