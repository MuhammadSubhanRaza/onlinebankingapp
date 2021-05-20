using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Branch
    {
        public Branch()
        {
            Accounts = new HashSet<Account>();
        }

        public int BranId { get; set; }
        public string BranName { get; set; }
        public string BranAddress { get; set; }
        public int? BranchCityId { get; set; }

        public virtual City BranchCity { get; set; }
        public virtual ICollection<Account> Accounts { get; set; }
    }
}
