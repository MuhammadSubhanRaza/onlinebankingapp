using BankingBackEndAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankingBackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustDashboardController : ControllerBase
    {

        private readonly OnlineBankingDBContext _context;
        public CustDashboardController(OnlineBankingDBContext context)
        {
            this._context = context;
        }


        [HttpPost]
        [Route("getcurrenttransactions")]
        public IEnumerable<Transactions> GetCurrentTransactions(Account account)
        {
            List<Transactions> list = this._context.Transactions.
                Where(a => a.TranAccountNoSender == account.AccAccountCode).ToList();
            return list;
        }

        [HttpPost]
        [Route("getcustomersidenavcounters")]
        public IActionResult GetCustomerSideNavCounters(Account account)
        {
            var totalTransactions = this._context.Transactions.Where(a =>
            a.TranAccountNoSender == account.AccAccountCode).Count();

            var totalRequests = this._context.LoanApplications.Where(a =>
            a.LoanAppCustId == account.AccCustomerId && a.LoanIsAccepted == false).Count();

            var totalComplaints = this._context.Complaints.Where(a =>
            a.CompCustId == account.AccCustomerId && a.CompStatus==false).Count();

            var totalNotifications = this._context.Notifiacation.Where(x =>
            x.NotHasRead == false).Count();

            var val = new { transactions=totalTransactions,requests=totalRequests,complaints=totalComplaints,notifications=totalNotifications};

            return Ok(val);
        }

    }
}
