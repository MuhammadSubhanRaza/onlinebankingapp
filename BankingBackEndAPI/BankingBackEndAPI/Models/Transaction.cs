using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Transaction
    {
        public int TranId { get; set; }
        public string TranAccountNoSender { get; set; }
        public string TranAccountNoReciever { get; set; }
        public DateTime? TranDate { get; set; }
        public decimal? TranAmountTransffered { get; set; }
    }
}
