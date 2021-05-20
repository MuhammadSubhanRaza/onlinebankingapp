using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Accounts = new HashSet<Account>();
            Complaints = new HashSet<Complaint>();
            LoanApplications = new HashSet<LoanApplication>();
            Loans = new HashSet<Loan>();
        }

        public int CustId { get; set; }
        public string CustFirstName { get; set; }
        public string CustLastName { get; set; }
        public string CustContact { get; set; }
        public string CustEmail { get; set; }
        public string CustAddress { get; set; }
        public int? CustCity { get; set; }
        public string CustOccupation { get; set; }
        public DateTime? CustDob { get; set; }
        public string CustNic { get; set; }
        public bool CustGender { get; set; }

        public virtual City CustCityNavigation { get; set; }
        public virtual ICollection<Account> Accounts { get; set; }
        public virtual ICollection<Complaint> Complaints { get; set; }
        public virtual ICollection<LoanApplication> LoanApplications { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
    }
}
