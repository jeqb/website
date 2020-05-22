using System;

namespace Domain
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public string Salt { get; set; }
        public string PasswordHash { get; set; }
        public int IsLockedOut { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime? UpdatedDateTime { get; set; }
    }
}