using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class LoanApplication
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
