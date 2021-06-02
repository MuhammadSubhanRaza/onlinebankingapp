using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankingBackEndAPI.Models;

namespace BankingBackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpDashboardController : ControllerBase
    {

        private readonly OnlineBankingDBContext _context;
        public EmpDashboardController(OnlineBankingDBContext context) {
            this._context = context;
        }

        [HttpGet]
        [Route("getindicators")]
        public IActionResult GetIndicators()
        {
            int totalAccounts = this._context.Account.Count();
            int totalEmployees = this._context.Employees.Count();
            int totalCustomers = this._context.Customer.Count();
            int totalComplaints = this._context.Complaints.Where(c =>
            c.CompStatus == false).Count();
            int totalDepartments = this._context.Departments.Count();

            return Ok(new { totalAccs=totalAccounts,totalEmps=totalEmployees,totalCusts=totalCustomers,
            totalComps=totalComplaints,totalDepts=totalDepartments});
        }

        [HttpGet]
        [Route("getcustomers")]
        public IEnumerable<Customer> GetCustomers()
        {
            List<Customer> customers = this._context.Customer.ToList();
            return customers;
        }

        //[HttpPost]
        //[Route("getbargraphdata")]
        //public IActionResult GetBarGraphData()
        //{
        //    this._context.Account.GroupBy(a => a.AccDateOfOpening).ToList();
        //}


    }
}
