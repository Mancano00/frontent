using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace App.Models
{
     [Table("Continentes")]
    public class Continente
    {
        [Key]
        public int continenteID { get; set; }
        public string Nome { get; set; }

        public List<Pais> Paises { get; set; }
        }
}
