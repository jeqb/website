using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<BlogPost> BlogPost { get; set; }
        public DbSet<Message> Message { get; set; }
        public DbSet<AppUser> AppUser { get; set; }
        public DbSet<LoginAttempt> LoginAttempt { get; set; }
    }
}
