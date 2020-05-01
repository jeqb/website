using System.Collections.Generic;
using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.EntityFrameworkCore;

namespace Application.BlogPosts
{
    public class List
    {
        public class Query : IRequest<List<BlogPost>> {}
        public class Handler : IRequestHandler<Query, List<BlogPost>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<BlogPost>> Handle(Query request, CancellationToken cancellationToken)
            {
                var posts = await _context.BlogPost.ToListAsync();
                
                return posts;
            }
        }
    }
}