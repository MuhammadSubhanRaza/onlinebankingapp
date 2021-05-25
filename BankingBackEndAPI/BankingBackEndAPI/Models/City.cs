using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class City
    {
        public City()
        {
            Branch = new HashSet<Branch>();
            Customer = new HashSet<Customer>();
        }

        public int CityId { get; set; }
        public string CityName { get; set; }

        public virtual ICollection<Branch> Branch { get; set; }
        public virtual ICollection<Customer> Customer { get; set; }
    }
}
