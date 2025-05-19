using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace EventLogsManage.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ModifyEventLogIdAttributeType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "EventLogs",
                schema: "dbo",
                newName: "EventLogs");

            migrationBuilder.AlterColumn<Guid>(
                name: "EventLogId",
                table: "EventLogs",
                type: "char(36)",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint")
                .OldAnnotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.RenameTable(
                name: "EventLogs",
                newName: "EventLogs",
                newSchema: "dbo");

            migrationBuilder.AlterColumn<long>(
                name: "EventLogId",
                schema: "dbo",
                table: "EventLogs",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "char(36)")
                .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn);
        }
    }
}
