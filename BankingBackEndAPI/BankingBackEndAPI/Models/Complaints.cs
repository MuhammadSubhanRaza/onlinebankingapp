using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Complaints
    {
        public int CompId { get; set; }
        public int? CompCustId { get; set; }
        public DateTime? CompDate { get; set; }
        public string CompMatter { get; set; }
        public bool? CompStatus { get; set; }

        public virtual Customer CompCust { get; set; }
    }
}
