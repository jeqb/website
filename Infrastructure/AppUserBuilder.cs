using System;
using Domain;

namespace Infrastructure
{
    public class AppUserBuilder
    {
        private string _UserName;
        private string _Email;
        private string _DisplayName;
        private byte[] _Salt;
        private string _Passwordhash;
        private int _IsLockedOut = 0;

        public AppUserBuilder AddUserName(string username)
        {
            _UserName = username;

            return this;
        }

        public AppUserBuilder AddEmail(string email)
        {
            _Email = email;

            return this;
        }

        public AppUserBuilder AddDisplayName(string displayName)
        {
            _DisplayName = displayName;
            
            return this;
        }

        public AppUserBuilder AddPassword(string password)
        {
            var tool = new PasswordTool();
            _Salt = tool.MakeSalt();

            _Passwordhash = tool.HashPassword(password, _Salt);

            return this;
        }

        public AppUser ReturnUser()
        {
            var user = new AppUser
                {
                    UserName = _UserName,
                    Email = _Email,
                    DisplayName = _DisplayName,
                    Salt = Convert.ToBase64String(_Salt),
                    PasswordHash = _Passwordhash,
                    IsLockedOut = _IsLockedOut,
                    CreatedDateTime = DateTime.Now,
                    UpdatedDateTime = null
                };

            return user;
        }
    }
}