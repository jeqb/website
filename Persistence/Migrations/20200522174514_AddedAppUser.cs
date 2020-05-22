using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddedAppUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppUser",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    Salt = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<string>(nullable: true),
                    IsLockedOut = table.Column<int>(nullable: false),
                    CreatedDateTime = table.Column<DateTime>(nullable: false),
                    UpdatedDateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUser", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LoginAttempt",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(nullable: false),
                    IsSuccess = table.Column<int>(nullable: false),
                    ResultedInLockout = table.Column<int>(nullable: false),
                    LoginDateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoginAttempt", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppUser");

            migrationBuilder.DropTable(
                name: "LoginAttempt");
        }
    }
}
