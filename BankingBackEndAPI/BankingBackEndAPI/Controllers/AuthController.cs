using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankingBackEndAPI.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace BankingBackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly OnlineBankingDBContext _context;
        private readonly IWebHostEnvironment _env;

        public AuthController(OnlineBankingDBContext context, IWebHostEnvironment env)
        {
            _context = context;
            this._env = env;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(Employees employee)
        {
            if (employee == null)
            {
                return BadRequest("Invalid Client Request");
            }
            else
            {
                Employees emp = _context.Employees.Where(x => x.EmpUserName == employee.EmpUserName &&
                x.EmpPassword == employee.EmpPassword).FirstOrDefault();

                if (emp != null)
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                    var signingCredentials = new SigningCredentials(secretKey,SecurityAlgorithms.HmacSha256);

                    var tokenoptions = new JwtSecurityToken(
                        issuer : "http://localhost:50991",
                        audience : "http://localhost:50991",
                        claims:new List<Claim>(),
                        expires : DateTime.Now.AddMinutes(15),
                        signingCredentials : signingCredentials
                        );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenoptions);
                    return Ok(new { token=tokenString ,emp});

                }
            }
            return Unauthorized();
        }


        [HttpPost]
        [Route("customerlogin")]
        public IActionResult CustomerLogin(Account account)
        {
            if (account == null)
            {
                return BadRequest("Invalid Client Request");
            }
            else
            {
                Account acc = _context.Account.Where(x => x.AccLoginName == account.AccLoginName &&
                x.AccPassword == account.AccPassword).FirstOrDefault();

                if (acc != null)
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                    var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokenoptions = new JwtSecurityToken(
                        issuer: "http://localhost:50991",
                        audience: "http://localhost:50991",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(15),
                        signingCredentials: signingCredentials
                        );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenoptions);
                    return Ok(new { token = tokenString,acc });

                }
            }
            return Unauthorized();
        }

        [Route("authenticatecustomer")]
        [HttpPost]
        public IActionResult AuthenticateCustomer(Account account)
        {
            if (account == null)
            {
                return Unauthorized();
            }

            Account acc = this._context.Account.Where(a => a.AccAccountCode == account.AccAccountCode
            && a.AccPassword == account.AccPassword).FirstOrDefault();

            if (acc != null)
            {
                return Ok(new { result = true,acc });
            }
            return Unauthorized();
        }

    }
}
