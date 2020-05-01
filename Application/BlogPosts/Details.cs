using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.BlogPosts
{
    public class Details
    {
        public class Query : IRequest<BlogPost>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, BlogPost>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<BlogPost> Handle(Query request, CancellationToken cancellationToken)
            {
                var post = await _context.BlogPost.FindAsync(request.Id);
                return post;
            }
        }
    }
}