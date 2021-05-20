using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Account
    {
        public int AccId { get; set; }
        public int? AccCustomerId { get; set; }
        public byte? AccType { get; set; }
        public decimal? AccOpeningBalance { get; set; }
        public DateTime? AccDateOfOpening { get; set; }
        public bool? AccStatus { get; set; }
        public int? AccBranchId { get; set; }
        public string AccAccountCode { get; set; }
        public string AccLoginName { get; set; }
        public string AccPassword { get; set; }

        public virtual Branch AccBranch { get; set; }
        public virtual Customer AccCustomer { get; set; }
        public virtual AccountsType AccTypeNavigation { get; set; }
    }
}
