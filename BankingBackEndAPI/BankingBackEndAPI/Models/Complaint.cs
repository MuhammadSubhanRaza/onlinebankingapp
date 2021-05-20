using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Complaint
    {
        public int CompId { get; set; }
        public int? CompCustId { get; set; }
        public DateTime? CompDate { get; set; }
        public string CompMatter { get; set; }
        public bool? CompStatus { get; set; }

        public virtual Customer CompCust { get; set; }
    }
}
