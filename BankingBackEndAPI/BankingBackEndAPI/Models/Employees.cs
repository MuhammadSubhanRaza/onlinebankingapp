using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Employees
    {
        public int EmpId { get; set; }
        public string EmpFirstName { get; set; }
        public string EmpLastName { get; set; }
        public bool? EmpGender { get; set; }
        public string EmpContact { get; set; }
        public string EmpEmail { get; set; }
        public DateTime? EmpDateOfBirth { get; set; }
        public string EmpPassword { get; set; }
        public string EmpQualification { get; set; }
        public string EmpUserName { get; set; }
        public decimal? EmpSalary { get; set; }
        public byte? EmpDepartment { get; set; }
        public string EmpImagePath { get; set; }

        public virtual Departments EmpDepartmentNavigation { get; set; }
    }
}
