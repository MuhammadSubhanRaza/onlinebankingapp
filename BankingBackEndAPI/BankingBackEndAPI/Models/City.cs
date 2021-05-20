using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class City
    {
        public City()
        {
            Branches = new HashSet<Branch>();
            Customers = new HashSet<Customer>();
        }

        public int CityId { get; set; }
        public string CityName { get; set; }

        public virtual ICollection<Branch> Branches { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
    }
}
