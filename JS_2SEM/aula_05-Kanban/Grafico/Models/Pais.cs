using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace App.Models
{
     [Table("Paises")]
    public class Pais
    {
        [Key]
        public int IdPaises { get; set; }
        public string Nome { get; set; }
        public string Capital { get; set; }
        public decimal Populacao { get; set; }

        public int continenteID { get; set;}
        public virtual Continente Continente { get; set; }
        }
}
