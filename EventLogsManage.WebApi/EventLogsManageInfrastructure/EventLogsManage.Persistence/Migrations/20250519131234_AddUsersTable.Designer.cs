﻿// <auto-generated />
using System;
using EventLogsManage.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EventLogsManage.Persistence.Migrations
{
    [DbContext(typeof(EventLogsManageDBContext))]
    [Migration("20250519131234_AddUsersTable")]
    partial class AddUsersTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("EventLogsManage.Domain.Entities.EventLogEntity", b =>
                {
                    b.Property<Guid>("EventLogId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<DateTimeOffset>("CreateDate")
                        .HasColumnType("datetime");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTimeOffset>("EventDate")
                        .HasColumnType("datetime");

                    b.Property<int>("EventType")
                        .HasColumnType("int");

                    b.HasKey("EventLogId");

                    b.ToTable("EventLogs");
                });

            modelBuilder.Entity("EventLogsManage.Domain.Entities.UserEntity", b =>
                {
                    b.Property<string>("Identification")
                        .HasColumnType("varchar(255)");

                    b.Property<DateTimeOffset>("CreateDate")
                        .HasColumnType("datetime");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Identification");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
