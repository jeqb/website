using System;

namespace Domain
{
    public class LoginAttempt
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int IsSuccess { get; set; }
        public int ResultedInLockout { get; set; }
        public DateTime LoginDateTime { get; set; }
    }
}