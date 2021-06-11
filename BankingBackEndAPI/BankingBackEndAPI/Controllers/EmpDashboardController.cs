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
            IEnumerable<Customer> customers = this._context.Customer.ToList().TakeLast(10);
            return customers;
        }

        [HttpGet]
        [Route("getbargraphdata")]
        public IActionResult GetBarGraphData()
        {
            var data = this._context.Account.GroupBy(a => a.AccDateOfOpening).Select(s=> new { 
                date = s.Key,
                val = s.Sum(v=>v.AccOpeningBalance)
            });

            return Ok(new { graphData = data });
        }

        [HttpGet]
        [Route("getrequestnotificationnumbers")]
        public int GetRequestNotificationNumbers()
        {
            int count = this._context.LoanApplications.Where(a =>
            a.LoanIsAccepted == false).Count();

            return count;
        }

        [HttpGet]
        [Route("getcomplaintscounter")]
        public int GetComplaintsCounter()
        {
            int count = this._context.Complaints.Where(a =>
            a.CompStatus == false).Count();

            return count;
        }


    }
}
