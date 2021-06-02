using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Notifiacation
    {
        public int NotId { get; set; }
        public int NotTo { get; set; }
        public string NotSubject { get; set; }
        public string NotBody { get; set; }
        public DateTime? NotDate { get; set; }
        public bool? NotHasRead { get; set; }
    }
}
