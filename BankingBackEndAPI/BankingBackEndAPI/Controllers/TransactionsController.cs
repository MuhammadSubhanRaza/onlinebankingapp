using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankingBackEndAPI.Models;

namespace BankingBackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly OnlineBankingDBContext _context;

        public TransactionsController(OnlineBankingDBContext context)
        {
            _context = context;
        }

        // GET: api/Transactions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transactions>>> GetTransactions()
        {
            return await _context.Transactions.ToListAsync();
        }

        [HttpPost]
        [Route("getcustomertransactions")]
        public List<Transactions> GetCustomerTransactions(Account account)
        {
            List<Transactions> transactions = this._context.Transactions.Where(a => a.TranAccountNoSender == account.AccAccountCode).ToList();
            return transactions;
        }

        // GET: api/Transactions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transactions>> GetTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);

            if (transaction == null)
            {
                return NotFound();
            }

            return transaction;
        }

        // PUT: api/Transactions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransaction(int id, Transactions transaction)
        {
            if (id != transaction.TranId)
            {
                return BadRequest();
            }

            _context.Entry(transaction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
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

        // POST: api/Transactions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Transactions>> PostTransaction(Transactions transaction)
        {
            transaction.TranRecieverName = this.GetRecieverName(transaction);
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            this.BalanceAccounts(transaction);

            return CreatedAtAction("GetTransaction", new { id = transaction.TranId }, transaction);
        }

        // DELETE: api/Transactions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Transactions>> DeleteTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }

            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();

            return transaction;
        }

        private bool TransactionExists(int id)
        {
            return _context.Transactions.Any(e => e.TranId == id);
        }

        private void BalanceAccounts(Transactions transaction)
        {
            Account sender = this._context.Account.Where(a => a.AccAccountCode == transaction.TranAccountNoSender).FirstOrDefault();
            Account reciever = this._context.Account.Where(a => a.AccAccountCode == transaction.TranAccountNoReciever).FirstOrDefault();
            decimal? newSenderBalance = sender.AccOpeningBalance - transaction.TranAmountTransffered;
            decimal? newRecieverBalance = reciever.AccOpeningBalance + transaction.TranAmountTransffered;
            sender.AccOpeningBalance = newSenderBalance;
            reciever.AccOpeningBalance = newRecieverBalance;
            this._context.Entry(sender).State = EntityState.Modified;
            this._context.Entry(reciever).State = EntityState.Modified;
            this._context.SaveChanges();
        }

        private string GetRecieverName(Transactions transactions)
        {
            Account acc = this._context.Account.Where(a => a.AccAccountCode == transactions.TranAccountNoReciever).FirstOrDefault();
            Customer cust = this._context.Customer.Where(c => c.CustId == acc.AccCustomerId).FirstOrDefault();
            return cust.CustFirstName + " " + cust.CustLastName;
        }
    }
}
