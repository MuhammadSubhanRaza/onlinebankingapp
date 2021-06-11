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
    public class LoanApplicationsController : ControllerBase
    {
        private readonly OnlineBankingDBContext _context;

        public LoanApplicationsController(OnlineBankingDBContext context)
        {
            _context = context;
        }

        // GET: api/LoanApplications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanApplications>>> GetLoanApplications()
        {
            return await _context.LoanApplications.ToListAsync();
        }

        // GET: api/LoanApplications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanApplications>> GetLoanApplications(int id)
        {
            var loanApplications = await _context.LoanApplications.FindAsync(id);

            if (loanApplications == null)
            {
                return NotFound();
            }

            return loanApplications;
        }

        // PUT: api/LoanApplications/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoanApplications(int id, LoanApplications loanApplications)
        {
            if (id != loanApplications.LoanAppId)
            {
                return BadRequest();
            }

            _context.Entry(loanApplications).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoanApplicationsExists(id))
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

        // POST: api/LoanApplications
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LoanApplications>> PostLoanApplications(LoanApplications loanApplications)
        {
            _context.LoanApplications.Add(loanApplications);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoanApplications", new { id = loanApplications.LoanAppId }, loanApplications);
        }

        // DELETE: api/LoanApplications/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoanApplications>> DeleteLoanApplications(int id)
        {
            var loanApplications = await _context.LoanApplications.FindAsync(id);
            if (loanApplications == null)
            {
                return NotFound();
            }

            _context.LoanApplications.Remove(loanApplications);
            await _context.SaveChangesAsync();

            return loanApplications;
        }


        [HttpGet]
        [Route("getunreadapplications")]
        public List<LoanApplications> GetUnreadApplications()
        {
            List<LoanApplications> list = this._context.LoanApplications.Include("LoanAppCust")
                .Where(x => x.LoanIsAccepted == false).ToList();

            //var list = (from l in _context.LoanApplications
            //            join c in _context.Customer
            //            on l.LoanAppCustId equals c.CustId
            //            join a in _context.Account
            //            on c.CustId equals a.AccCustomerId
            //            where l.LoanIsAccepted==false 
            //            select new {l,a,c}).ToList();

            //return Ok(new { data=list});
            return list;
        }

        private bool LoanApplicationsExists(int id)
        {
            return _context.LoanApplications.Any(e => e.LoanAppId == id);
        }
    }
}
