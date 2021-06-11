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
    public class ComplaintsController : ControllerBase
    {
        private readonly OnlineBankingDBContext _context;

        public ComplaintsController(OnlineBankingDBContext context)
        {
            _context = context;
        }

        // GET: api/Complaints
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Complaints>>> GetComplaints()
        {
            return await _context.Complaints.Include("CompCust").Where(x=>
            x.CompStatus==false).ToListAsync();
        }

        // GET: api/Complaints/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Complaints>> GetComplaints(int id)
        {
            var complaints = await _context.Complaints.FindAsync(id);

            if (complaints == null)
            {
                return NotFound();
            }

            return complaints;
        }

        // PUT: api/Complaints/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComplaints(int id, Complaints complaints)
        {
            if (id != complaints.CompId)
            {
                return BadRequest();
            }

            _context.Entry(complaints).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComplaintsExists(id))
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

        // POST: api/Complaints
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Complaints>> PostComplaints(Complaints complaints)
        {
            _context.Complaints.Add(complaints);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComplaints", new { id = complaints.CompId }, complaints);
        }

        // DELETE: api/Complaints/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Complaints>> DeleteComplaints(int id)
        {
            var complaints = await _context.Complaints.FindAsync(id);
            if (complaints == null)
            {
                return NotFound();
            }

            _context.Complaints.Remove(complaints);
            await _context.SaveChangesAsync();

            return complaints;
        }

        private bool ComplaintsExists(int id)
        {
            return _context.Complaints.Any(e => e.CompId == id);
        }
    }
}
