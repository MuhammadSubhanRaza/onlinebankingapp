#pragma checksum "C:\Users\Muhammad Subhan Raza\Desktop\OnlineBankingApp\onlinebankingapp\BankingBackEndAPI\BankingBackEndAPI\Views\Cities\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0eef07df892b05dc9433e884f95b7aa04bae3eb9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Cities_Details), @"mvc.1.0.view", @"/Views/Cities/Details.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0eef07df892b05dc9433e884f95b7aa04bae3eb9", @"/Views/Cities/Details.cshtml")]
    public class Views_Cities_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<BankingBackEndAPI.Models.City>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Muhammad Subhan Raza\Desktop\OnlineBankingApp\onlinebankingapp\BankingBackEndAPI\BankingBackEndAPI\Views\Cities\Details.cshtml"
  
    ViewData["Title"] = "Details";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Details</h1>\r\n\r\n<div>\r\n    <h4>City</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 14 "C:\Users\Muhammad Subhan Raza\Desktop\OnlineBankingApp\onlinebankingapp\BankingBackEndAPI\BankingBackEndAPI\Views\Cities\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.CityName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 17 "C:\Users\Muhammad Subhan Raza\Desktop\OnlineBankingApp\onlinebankingapp\BankingBackEndAPI\BankingBackEndAPI\Views\Cities\Details.cshtml"
       Write(Html.DisplayFor(model => model.CityName));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n    </dl>\r\n</div>\r\n<div>\r\n    <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 426, "\"", 454, 1);
#nullable restore
#line 22 "C:\Users\Muhammad Subhan Raza\Desktop\OnlineBankingApp\onlinebankingapp\BankingBackEndAPI\BankingBackEndAPI\Views\Cities\Details.cshtml"
WriteAttributeValue("", 441, Model.CityId, 441, 13, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\r\n    <a asp-action=\"Index\">Back to List</a>\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<BankingBackEndAPI.Models.City> Html { get; private set; }
    }
}
#pragma warning restore 1591
