using System;
using System.Security.Cryptography;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace Infrastructure
{
    public class PasswordTool : IPasswordTool
    {
        public byte[] MakeSalt()
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            return salt;
        }

        public string HashPassword(string password, byte[] salt)
        {
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return hashed;
        }

        public bool ValidatePassword(string clientPassword, string storedSalt, string storedHash)
        {
            var decodedSalt = Convert.FromBase64String(storedSalt);

            var clientHash = HashPassword(clientPassword, decodedSalt);

            if(clientHash == storedHash)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}