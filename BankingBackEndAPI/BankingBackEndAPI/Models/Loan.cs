using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Loan
    {
        public int LoanId { get; set; }
        public int? LoanCustomerId { get; set; }
        public DateTime? LoanDateOfTransfer { get; set; }
        public decimal? LoanAmountTransffered { get; set; }

        public virtual Customer LoanCustomer { get; set; }
    }
}
