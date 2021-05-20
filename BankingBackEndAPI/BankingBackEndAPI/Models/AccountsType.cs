using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class AccountsType
    {
        public AccountsType()
        {
            Accounts = new HashSet<Account>();
        }

        public byte ActypeId { get; set; }
        public string ActypeName { get; set; }

        public virtual ICollection<Account> Accounts { get; set; }
    }
}
