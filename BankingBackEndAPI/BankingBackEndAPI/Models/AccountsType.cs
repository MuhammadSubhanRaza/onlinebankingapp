using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class AccountsType
    {
        public AccountsType()
        {
            Account = new HashSet<Account>();
        }

        public byte ActypeId { get; set; }
        public string ActypeName { get; set; }

        public virtual ICollection<Account> Account { get; set; }
    }
}
