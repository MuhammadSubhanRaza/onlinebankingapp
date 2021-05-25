using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Account = new HashSet<Account>();
            Complaints = new HashSet<Complaints>();
            Loan = new HashSet<Loan>();
            LoanApplications = new HashSet<LoanApplications>();
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
        public string CustImagePath { get; set; }

        public virtual City CustCityNavigation { get; set; }
        public virtual ICollection<Account> Account { get; set; }
        public virtual ICollection<Complaints> Complaints { get; set; }
        public virtual ICollection<Loan> Loan { get; set; }
        public virtual ICollection<LoanApplications> LoanApplications { get; set; }
    }
}
