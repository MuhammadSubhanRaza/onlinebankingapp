import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt'
import { EmpAuthGuard } from './guard/emp-auth-guardservice'
import { DataSharingService } from './data-sharing.service'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { ApplicationMainComponent } from './application-main/application-main.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApplicationMainRoutingModule } from './application-main/aplication-main-routing-module'
import { SharedService } from './shared.service';
import { TransactionsComponent } from './application-main/transactions/transactions.component';
import { ViewTransComponent } from './application-main/transactions/view-trans/view-trans.component';
import { DepartmentsComponent } from './application-main/departments/departments.component';
import { ShowDeptComponent } from './application-main/departments/show-dept/show-dept.component';
import { AddEditDeptComponent } from './application-main/departments/add-edit-dept/add-edit-dept.component';
import { EmployeeComponent } from './application-main/employee/employee.component';
import { ShowEmpComponent } from './application-main/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './application-main/employee/add-edit-emp/add-edit-emp.component';
import { CustomerComponent } from './application-main/customer/customer.component';
import { ShowCustComponent } from './application-main/customer/show-cust/show-cust.component';
import { BranchComponent } from './application-main/branch/branch.component';
import { AddeditCustComponent } from './application-main/customer/addedit-cust/addedit-cust.component';
import { ShowBranchComponent } from './application-main/branch/show-branch/show-branch.component';
import { AddeditBranchComponent } from './application-main/branch/addedit-branch/addedit-branch.component';
import { BankaccountComponent } from './application-main/bankaccount/bankaccount.component';
import { ShowBankaccountComponent } from './application-main/bankaccount/show-bankaccount/show-bankaccount.component';
import { AddeditBankaccountComponent } from './application-main/bankaccount/addedit-bankaccount/addedit-bankaccount.component';
import { AddeditLoanComponent } from './application-main/loan/addedit-loan/addedit-loan.component';
import { LoanComponent } from './application-main/loan/loan.component';
import { ShowLoanComponent } from './application-main/loan/show-loan/show-loan.component';
import { LoanApplicationComponent } from './application-main/loan-application/loan-application.component';
import { ShowApplicationsComponent } from './application-main/loan-application/show-applications/show-applications.component';
import { AddeditApplicationComponent } from './application-main/loan-application/addedit-application/addedit-application.component';
import { EmpSettingsComponent } from './application-main/emp-settings/emp-settings.component';
import { CustSettingsComponent } from './application-main/cust-settings/cust-settings.component';
import { CustDashboardComponent } from './application-main/cust-dashboard/cust-dashboard.component';
import { DeleteDeptComponent } from './application-main/departments/delete-dept/delete-dept.component';
import { FooterComponent } from './application-main/footer/footer.component';
import { DeptDetailsComponent } from './application-main/departments/dept-details/dept-details.component';
import { MakeTransComponent } from './application-main/transactions/make-trans/make-trans.component';
import { PrintTransComponent } from './application-main/transactions/print-trans/print-trans.component';
import { DeleteBranchComponent } from './application-main/branch/delete-branch/delete-branch.component';
import { DetailBranchComponent } from './application-main/branch/detail-branch/detail-branch.component';
import { DetailsEmpComponent } from './application-main/employee/details-emp/details-emp.component';
import { DeleteEmpComponent } from './application-main/employee/delete-emp/delete-emp.component';
import { DeleteCustComponent } from './application-main/customer/delete-cust/delete-cust.component';
import { MasterComponent } from './application-main/master/master.component';
import { DeleteAccComponent } from './application-main/bankaccount/delete-acc/delete-acc.component';
import { DetialAccComponent } from './application-main/bankaccount/detial-acc/detial-acc.component';
import { DetailCustComponent } from './application-main/customer/detail-cust/detail-cust.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth-guard.service';
import { AdminDashboardComponent } from './application-main/admin-dashboard/admin-dashboard.component';
import { GenerateNotificationComponent } from './application-main/generate-notification/generate-notification.component';
import { ViewNotificationComponent } from './application-main/view-notification/view-notification.component';
import { NgxPrintModule } from 'ngx-print';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyBalanceComponent } from './application-main/company-balance/company-balance.component';
import { ViewBalanceComponent } from './application-main/company-balance/view-balance/view-balance.component';


export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    ApplicationMainComponent,
    WelcomeComponent,
    DepartmentsComponent,
    ShowDeptComponent,
    AddEditDeptComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CustomerComponent,
    ShowCustComponent,
    AddeditCustComponent,
    BranchComponent,
    ShowBranchComponent,
    AddeditBranchComponent,
    BankaccountComponent,
    ShowBankaccountComponent,
    AddeditBankaccountComponent,
    LoanComponent,
    ShowLoanComponent,
    AddeditLoanComponent,
    LoanApplicationComponent,
    ShowApplicationsComponent,
    AddeditApplicationComponent,
    EmpSettingsComponent,
    CustSettingsComponent,
    CustDashboardComponent,
    DeleteDeptComponent,
    FooterComponent,
    DeptDetailsComponent,
    TransactionsComponent,
    MakeTransComponent,
    ViewTransComponent,
    PrintTransComponent,
    DeleteBranchComponent,
    DetailBranchComponent,
    DetailsEmpComponent,
    DeleteEmpComponent,
    DeleteCustComponent,
    DetailCustComponent,
    DetialAccComponent, 
    DeleteAccComponent,
    MasterComponent,
    AdminDashboardComponent,
    GenerateNotificationComponent,
    ViewNotificationComponent,
    CompanyBalanceComponent,
    ViewBalanceComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ApplicationMainRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxPrintModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains : ["http://localhost:50991"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [DataSharingService,AuthGuard,EmpAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
