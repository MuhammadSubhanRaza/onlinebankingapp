import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AddeditBankaccountComponent } from './bankaccount/addedit-bankaccount/addedit-bankaccount.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { ShowBankaccountComponent } from './bankaccount/show-bankaccount/show-bankaccount.component';
import { BranchComponent } from './branch/branch.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { CustSettingsComponent } from './cust-settings/cust-settings.component';
import { AddeditCustComponent } from './Customer/addedit-cust/addedit-cust.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './Customer/show-cust/show-cust.component';
import { DepartmentsComponent } from './departments/departments.component'
import { EmpSettingsComponent } from './emp-settings/emp-settings.component';
import { AddEditEmpComponent } from './Employee/add-edit-emp/add-edit-emp.component';
import { EmployeeComponent } from './employee/employee.component'
import { ShowEmpComponent } from './employee/show-emp/show-emp.component'
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { MakeTransComponent } from './transactions/make-trans/make-trans.component';
import { PrintTransComponent } from './transactions/print-trans/print-trans.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewTransComponent } from './transactions/view-trans/view-trans.component';


const routes : Routes = [
  {path:"employees",component:EmployeeComponent,children:[
    {path:"view",component:ShowEmpComponent},
    {path:"addedit",component:AddEditEmpComponent}
  ]},
  {path:"departments",component:DepartmentsComponent},
  {path:"customers",component:CustomerComponent,children:[
    {path:"view",component:ShowCustComponent},
    {path:"addedit",component:AddeditCustComponent}
  ]},
  {path:"branch",component:BranchComponent},
  {path:"bankaccount",component:BankaccountComponent,children:[
    {path:"view",component:ShowBankaccountComponent},
    {path:"addedit",component:AddeditBankaccountComponent}
  ]},
  {path:"loanapplication",component:LoanApplicationComponent},
  {path:"empsettings",component:EmpSettingsComponent},
  {path:"custsettings",component:CustSettingsComponent},
  {path:"customerdashboard",component:CustDashboardComponent},
  {path:"transaction",component:TransactionsComponent,children:[
    {path:"make",component:MakeTransComponent},
    {path:"view",component:ViewTransComponent},
    {path:"print",component:PrintTransComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
