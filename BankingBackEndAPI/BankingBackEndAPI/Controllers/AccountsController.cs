using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankingBackEndAPI.Models;
using BankingBackEndAPI.Emails;
using Microsoft.AspNetCore.Hosting;

namespace BankingBackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private SetEmailConfig emailConfig;
        private readonly OnlineBankingDBContext _context;
        private readonly IWebHostEnvironment _env;

        public AccountsController(OnlineBankingDBContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: api/Accounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccount()
        {
            return await _context.Account.Include("AccCustomer").Include("AccTypeNavigation").ToListAsync();
        }

        // GET: api/Accounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            var account = await _context.Account.FindAsync(id);

            if (account == null)
            {
                return NotFound();
            }

            return account;
        }

        // PUT: api/Accounts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            if (id != account.AccId)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Accounts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public ActionResult<Account> PostAccount(Account account)
        {
            _context.Account.Add(account);
            Customer customer = this._context.Customer.Where(x => x.CustId == account.AccCustomerId).FirstOrDefault();
            _context.SaveChanges();
            this.emailConfig = new SetEmailConfig(this._env);
            this.emailConfig.SendCustomerBankAccountGenerationEmail(account,customer);

            return CreatedAtAction("GetAccount", new { id = account.AccId }, account);
        }

        // DELETE: api/Accounts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Account>> DeleteAccount(int id)
        {
            var account = await _context.Account.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }

            _context.Account.Remove(account);
            await _context.SaveChangesAsync();

            return account;
        }

        private bool AccountExists(int id)
        {
            return _context.Account.Any(e => e.AccId == id);
        }

        [Route("GetLastChild")]
        [HttpGet]
        public async Task<ActionResult<Account>> GetLastChild()

        {
            var acc = _context.Account.ToList();
            var cst = acc.Last();

            if (acc == null)
            {
                return NotFound();
            }

            return cst;
        }


        [HttpPost]
        [Route("getaccountfromaccountno")]
        public Account GetAccountFromAccountNo(Account acc)
        {
            Account account = this._context.Account.Include("AccTypeNavigation").Where(x => x.AccAccountCode == acc.AccAccountCode).FirstOrDefault();
            return account;
        }

        [HttpPost]
        [Route("getbargraphdata")]
        public IActionResult GetBarGraphData(Transactions acc)
        {
            var data = this._context.Transactions.Where(x=>x.TranAccountNoSender==acc.TranAccountNoSender).GroupBy(a => a.TranDate).Select(s => new {
                date = s.Key,
                val = s.Sum(v => v.TranAmountTransffered)
            });

            return Ok(new { graphData = data });
        }

        [HttpPost]
        [Route("getdatathroughcustid")]
        public IActionResult GetDataThroughCustId(Account acc)
        {
            var data = this._context.Account.Include("AccTypeNavigation").Where(x => 
            x.AccCustomerId == acc.AccCustomerId).FirstOrDefault();

            return Ok(new { accountData = data });
        }

    }
}
