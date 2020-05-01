using System;
using System.Linq;
using System.Collections.Generic;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
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
                        Title = "My fake title 2",
                        Body = "This is my fake body for title 2",
                        ImageKey = null,
                        CreatedDateTime = DateTime.Now,
                        UpdatedDateTime = null,
                    },
                    new BlogPost
                    { 
                        Title = "My fake title 3",
                        Body = "This is my fake body for title 3",
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