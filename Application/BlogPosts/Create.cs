using System;
using System.ComponentModel.DataAnnotations;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.BlogPosts
{
    public class Create
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            [Required]
            public string Title { get; set; }
            [Required]
            public string Body { get; set; }
            public int? ImageKey { get; set; }
            public DateTime CreatedDateTime { get; set; }
            public DateTime? UpdatedDateTime { get; set; }
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
                var post = new BlogPost
                {
                    Title = request.Title,
                    Body = request.Body,
                    ImageKey = request.ImageKey,
                    CreatedDateTime = DateTime.Now,
                    UpdatedDateTime = null
                };

                _context.BlogPost.Add(post);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving data to database");
            }
        }
    }
}