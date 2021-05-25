using System;
using System.Collections.Generic;

#nullable disable

namespace BankingBackEndAPI.Models
{
    public partial class Department
    {
        public Department()
        {
            Employees = new HashSet<Employees>();
        }

        public byte DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<Employees> Employees { get; set; }
    }
}
