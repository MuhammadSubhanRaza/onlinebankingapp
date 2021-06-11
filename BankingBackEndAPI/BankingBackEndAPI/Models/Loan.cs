using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Loan
    {
        public int LoanId { get; set; }
        public int? LoanCustomerId { get; set; }
        public DateTime? LoanDateOfTransfer { get; set; }
        public decimal? LoanAmountTransffered { get; set; }
        public int? LoanAccouontId { get; set; }

        public virtual Account LoanAccouont { get; set; }
    }
}
