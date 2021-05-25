using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Branch
    {
        public Branch()
        {
            Account = new HashSet<Account>();
        }

        public int BranId { get; set; }
        public string BranName { get; set; }
        public string BranAddress { get; set; }
        public int? BranchCityId { get; set; }

        public virtual City BranchCity { get; set; }
        public virtual ICollection<Account> Account { get; set; }
    }
}
