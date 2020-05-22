﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200522174514_AddedAppUser")]
    partial class AddedAppUser
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0");

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("DisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<int>("IsLockedOut")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("Salt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("UpdatedDateTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("AppUser");
                });

            modelBuilder.Entity("Domain.BlogPost", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Body")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ImageKey")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("UpdatedDateTime")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("BlogPost");
                });

            modelBuilder.Entity("Domain.LoginAttempt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("IsSuccess")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("LoginDateTime")
                        .HasColumnType("TEXT");

                    b.Property<int>("ResultedInLockout")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("LoginAttempt");
                });

            modelBuilder.Entity("Domain.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("MessageContent")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("MessageDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Message");
                });
#pragma warning restore 612, 618
        }
    }
}