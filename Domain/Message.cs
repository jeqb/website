using System;

namespace Domain
{
    public class Message
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string MessageContent { get; set; }
        public DateTime MessageDate { get; set; }
    }
}