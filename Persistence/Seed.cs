using System;
using System.Linq;
using System.Collections.Generic;
using Domain;
using Infrastructure;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context, AppUserBuilder userBuilder)
        {
            // DUMMY ADMIN USER. REMOVE IN PRODUCTION
            if(!context.AppUser.Any())
            {
                var user = userBuilder.AddUserName("admin")
                    .AddEmail("james@test.com")
                    .AddDisplayName("Admin - James")
                    .AddPassword("Pa$$w0rd")
                    .ReturnUser();

                context.AppUser.Add(user);
                context.SaveChanges();
            }
            // DUMMY ADMIN USER. REMOVE IN PRODUCTION

            if(!context.BlogPost.Any())
            {
                var posts = new List<BlogPost>
                {
                    new BlogPost
                    { 
                        Title = "My fake title 1 From Seed",
                        Body = "This is my fake body for title 1",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 2 From Seed",
                        Body = "This is my fake body for title 2",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 3 From Seed",
                        Body = "This is my fake body for title 3",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 4 From Seed",
                        Body = "This is my fake body for title 4",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 5 From Seed",
                        Body = "This is my fake body for title 5",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 6 From Seed",
                        Body = "This is my fake body for title 6",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 7 From Seed",
                        Body = "This is my fake body for title 7",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 8 From Seed",
                        Body = "This is my fake body for title 8",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 9 From Seed",
                        Body = "This is my fake body for title 9",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 10 From Seed",
                        Body = "This is my fake body for title 10",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    }
                };

                context.BlogPost.AddRange(posts);
                context.SaveChanges();
            }

            if(!context.Message.Any())
            {
                var messages = new List<Message>
                {
                    new Message
                    {
                        Name = "John Roberts",
                        Email = "my_email@yahoo.com",
                        MessageContent = "This is my message. You are awesome at programming.",
                        MessageDate = DateTime.Now,
                    },
                    new Message
                    {
                        Name = "Bob Smells",
                        Email = "my_email@gmail.com",
                        MessageContent = "This is my message. You are fantastic.",
                        MessageDate = DateTime.Now,
                    },
                    new Message
                    {
                        Name = "Billy Bob",
                        Email = "my_email@outlook.com",
                        MessageContent = "Here is another message.",
                        MessageDate = DateTime.Now,
                    }
                };

                context.Message.AddRange(messages);
                context.SaveChanges();
            }
        }
    }
}