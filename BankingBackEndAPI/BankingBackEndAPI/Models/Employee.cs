using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Employee
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

        public virtual Department EmpDepartmentNavigation { get; set; }
    }
}
