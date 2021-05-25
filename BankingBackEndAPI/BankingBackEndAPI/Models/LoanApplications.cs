using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class LoanApplications
    {
        public int LoanAppId { get; set; }
        public int? LoanAppCustId { get; set; }
        public string LoanAppSubject { get; set; }
        public string LoanAppBody { get; set; }
        public decimal? LoanAppMoneyAsked { get; set; }
        public int? LoanNumberOfInstallments { get; set; }
        public string LoanReason { get; set; }
        public bool? LoanIsAccepted { get; set; }

        public virtual Customer LoanAppCust { get; set; }
    }
}
