using Microsoft.EntityFrameworkCore;
using Exemplo02.Models;

namespace Exemplo02.Context
{
     public class AppDbContext : DbContext{
        public AppDbContext (DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Pais> Paises { get; set; }
        public DbSet<Continente> Continentes { get; set;}
    }
}