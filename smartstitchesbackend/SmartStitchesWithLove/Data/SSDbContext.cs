using Microsoft.EntityFrameworkCore;
using SmartStitchesWithLove.Models;

namespace SmartStitchesWithLove.Data
{
    public class SSDbContext : DbContext
    {
        public SSDbContext(DbContextOptions<SSDbContext> options) : base(options)
        {

        }


        // if table doesnt  exist it creates it
        public DbSet<Product> Products { get; set; }

    }
}

