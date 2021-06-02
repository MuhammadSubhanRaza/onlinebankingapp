using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Transactions
    {
        public int TranId { get; set; }
        public string TranAccountNoSender { get; set; }
        public string TranAccountNoReciever { get; set; }
        public DateTime? TranDate { get; set; }
        public decimal? TranAmountTransffered { get; set; }
        public string TranRecieverName { get; set; }
        public string TranDescription { get; set; }
    }
}
