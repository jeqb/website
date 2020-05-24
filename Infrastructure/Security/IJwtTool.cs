using Domain;

namespace Infrastructure.Security
{
    public interface IJwtTool
    {
         string CreateToken(AppUser user);
    }
}