using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using BankingBackEndAPI.Models;
using Microsoft.AspNetCore.Hosting;
using MimeKit;

namespace BankingBackEndAPI.Emails
{
    public class SetEmailConfig
    {
        private readonly IWebHostEnvironment _env;

        public SetEmailConfig(IWebHostEnvironment env)
        {
            this._env = env;
        }

        public void SendCredentialsToNewlyAddedEmployee(Employees employee)
        {
            string toEmail = employee.EmpEmail;
            string subject = "Congratulations your account has been created";
            string body = GenerateEmployeeMailBody(employee);
            MailMessage message = new MailMessage();
            message.To.Add(toEmail);
            message.Subject = subject;
            message.Body = body;
            message.From = new MailAddress("sp19bsse0026@maju.edu.pk");
            message.IsBodyHtml = true;


            SmtpClient client = new SmtpClient("smtp.gmail.com");
            client.UseDefaultCredentials = true;
            client.Port = 587;
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential("sp19bsse0026@maju.edu.pk","MAJU2019@spRing350");
            client.Send(message);
        }


        private string GenerateEmployeeMailBody(Employees employee)
        {
            string body = "";

            using (StreamReader reader = new StreamReader(_env.ContentRootPath+"/Emails/"+ "emailTemplate.html")) 
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{fName}",employee.EmpFirstName);
            body = body.Replace("{lName}", employee.EmpLastName);
            body = body.Replace("{contact}", employee.EmpContact);
            body = body.Replace("{email}", employee.EmpEmail);
            body = body.Replace("{salary}", employee.EmpSalary.ToString());
            body = body.Replace("{uName}", employee.EmpUserName);
            body = body.Replace("{password}", employee.EmpPassword);

            return body;
        }

        public void SendCustomerBankAccountGenerationEmail(Account account,Customer customer)
        {
            string toEmail = customer.CustEmail;
            string subject = "Congratulations your account has been created";
            string body = GenerateCustomerMailBody(account,customer);
            MailMessage message = new MailMessage();
            message.To.Add(toEmail);
            message.Subject = subject;
            message.Body = body;
            message.From = new MailAddress("sp19bsse0026@maju.edu.pk");
            message.IsBodyHtml = true;


            SmtpClient client = new SmtpClient("smtp.gmail.com");
            client.UseDefaultCredentials = true;
            client.Port = 587;
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential("sp19bsse0026@maju.edu.pk", "MAJU2019@spRing350");
            client.Send(message);
        }

        private string GenerateCustomerMailBody(Account account,Customer customer)
        {
            string body = "";

            using (StreamReader reader = new StreamReader(_env.ContentRootPath + "/Emails/" + "CustomerTemplate.html"))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{cName}", customer.CustFirstName+" "+customer.CustLastName);
            body = body.Replace("{cContact}", customer.CustContact);
            body = body.Replace("{cEmail}", customer.CustEmail);
            body = body.Replace("{cAddress}", customer.CustAddress);
            body = body.Replace("{cNIC}", customer.CustNic);
            body = body.Replace("{cDOB}", customer.CustDob.ToString());

            body = body.Replace("{aAccountCode}", account.AccAccountCode);
            body = body.Replace("{aLoginName}", account.AccLoginName);
            body = body.Replace("{aPassword}", account.AccPassword);
            body = body.Replace("{aOpeningBalance}", account.AccOpeningBalance.ToString());
            body = body.Replace("{aAccountOpeningDate}", account.AccDateOfOpening.ToString());

            return body;
        }

    }
}
