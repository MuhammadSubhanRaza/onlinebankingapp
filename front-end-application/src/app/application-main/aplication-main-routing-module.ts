
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth-guard.service';
import { EmpAuthGuard } from '../guard/emp-auth-guardservice';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllLoanapplicationsComponent } from './all-loanapplications/all-loanapplications.component';
import { ApplicationMainComponent } from './application-main.component';
import { AddeditBankaccountComponent } from './bankaccount/addedit-bankaccount/addedit-bankaccount.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { ShowBankaccountComponent } from './bankaccount/show-bankaccount/show-bankaccount.component';
import { BranchComponent } from './branch/branch.component';
import { ViewBalanceComponent } from './company-balance/view-balance/view-balance.component';
import { ComplaintMakeComponent } from './complaint-make/complaint-make.component';
import { ComplaintViewComponent } from './complaint-view/complaint-view.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { CustSettingsComponent } from './cust-settings/cust-settings.component';
import { AddeditCustComponent } from './customer/addedit-cust/addedit-cust.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmpSettingsComponent } from './emp-settings/emp-settings.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { GenerateNotificationComponent } from './generate-notification/generate-notification.component';
import { GiveLoanComponent } from './give-loan/give-loan.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { MasterComponent } from './master/master.component';
import { MakeTransComponent } from './transactions/make-trans/make-trans.component';
import { PrintTransComponent } from './transactions/print-trans/print-trans.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewTransComponent } from './transactions/view-trans/view-trans.component';
import { UsersComponent } from './users/users.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

const routes : Routes = [
    {path:"onlinebanking",component:ApplicationMainComponent,canActivate:[AuthGuard],children:[
        {path:"main",component:MasterComponent},
        {path:"employees",component:EmployeeComponent,canActivate:[EmpAuthGuard],children:[
          {path:"view",component:ShowEmpComponent},
          {path:"addedit",component:AddEditEmpComponent}
        ]},
        {path:"departments",component:DepartmentsComponent,canActivate:[EmpAuthGuard]},
        {path:"customers",component:CustomerComponent,canActivate:[EmpAuthGuard],children:[
          {path:"view",component:ShowCustComponent},
          {path:"addedit",component:AddeditCustComponent}
        ]},
        {path:"branch",component:BranchComponent,canActivate:[EmpAuthGuard]},
        {path:"bankaccount",component:BankaccountComponent,canActivate:[EmpAuthGuard],children:[
          {path:"view",component:ShowBankaccountComponent},
          {path:"addedit",component:AddeditBankaccountComponent}
        ]},
        {path:"loanapplication",component:LoanApplicationComponent},
        {path:"admindashboard",component:AdminDashboardComponent,canActivate:[EmpAuthGuard]},
        {path:"empsettings",component:EmpSettingsComponent,canActivate:[EmpAuthGuard]},
        {path:"custsettings",component:CustSettingsComponent},
        {path:"customerdashboard",component:CustDashboardComponent},
        {path:"notifications",component:ViewNotificationComponent},
        {path:"compbalance",component:ViewBalanceComponent},
        {path:"makecomplaint",component:ComplaintMakeComponent},
        {path:"viewcomplaint",component:ComplaintViewComponent},
        {path:"giveloan",component:GiveLoanComponent},
        {path:"allloanapplications",component:AllLoanapplicationsComponent},
        {path:"genertaenotification",component:GenerateNotificationComponent,canActivate:[EmpAuthGuard]},
        {path:"transaction",component:TransactionsComponent,children:[
          {path:"make",component:MakeTransComponent},
          {path:"view",component:ViewTransComponent},
          {path:"print",component:PrintTransComponent}
        ]}
    ]}
]


@NgModule({
  declarations: [UsersComponent],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class ApplicationMainRoutingModule { 
    
}

