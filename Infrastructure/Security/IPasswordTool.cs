namespace Infrastructure.Security
{
    public interface IPasswordTool
    {
        byte[] MakeSalt();
        string HashPassword(string password, byte[] salt);
        bool ValidatePassword(string clientPassword, string storedSalt, string storedHash);
    }
}