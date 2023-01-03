using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using SmartStitchesWithLove.Data;
using SmartStitchesWithLove.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//
builder.Services.AddFluentValidation(options =>
options.RegisterValidatorsFromAssemblyContaining<Program>());
//
builder.Services.AddDbContext<SSDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SS"));
});
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();

        //builder.WithOrigins("https://localhost:3000");
    });
});
//configure the interface
builder.Services.AddScoped<IProductRepository, ProductRepository>();

//
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors();

app.MapControllers();

app.Run();
