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
    public class NotifiacationsController : ControllerBase
    {
        private readonly OnlineBankingDBContext _context;

        public NotifiacationsController(OnlineBankingDBContext context)
        {
            _context = context;
        }

        // GET: api/Notifiacations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notifiacation>>> GetNotifiacation()
        {
            return await _context.Notifiacation.ToListAsync();
        }

        // GET: api/Notifiacations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Notifiacation>> GetNotifiacation(int id)
        {
            var notifiacation = await _context.Notifiacation.FindAsync(id);

            if (notifiacation == null)
            {
                return NotFound();
            }

            return notifiacation;
        }

        // PUT: api/Notifiacations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotifiacation(int id, Notifiacation notifiacation)
        {
            if (id != notifiacation.NotId)
            {
                return BadRequest();
            }

            _context.Entry(notifiacation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotifiacationExists(id))
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

        // POST: api/Notifiacations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Notifiacation>> PostNotifiacation(Notifiacation notifiacation)
        {
            _context.Notifiacation.Add(notifiacation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNotifiacation", new { id = notifiacation.NotId }, notifiacation);
        }

        // DELETE: api/Notifiacations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Notifiacation>> DeleteNotifiacation(int id)
        {
            var notifiacation = await _context.Notifiacation.FindAsync(id);
            if (notifiacation == null)
            {
                return NotFound();
            }

            _context.Notifiacation.Remove(notifiacation);
            await _context.SaveChangesAsync();

            return notifiacation;
        }

        private bool NotifiacationExists(int id)
        {
            return _context.Notifiacation.Any(e => e.NotId == id);
        }
    }
}
