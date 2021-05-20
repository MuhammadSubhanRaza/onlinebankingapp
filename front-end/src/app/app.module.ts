import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ShowDeptComponent } from './Departments/show-dept/show-dept.component';
import { AddEditDeptComponent } from './Departments/add-edit-dept/add-edit-dept.component'
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './Employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './Employee/add-edit-emp/add-edit-emp.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './Customer/show-cust/show-cust.component';
import { AddeditCustComponent } from './Customer/addedit-cust/addedit-cust.component';
import { BranchComponent } from './branch/branch.component';
import { ShowBranchComponent } from './Branch/show-branch/show-branch.component';
import { AddeditBranchComponent } from './Branch/addedit-branch/addedit-branch.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { ShowBankaccountComponent } from './bankaccount/show-bankaccount/show-bankaccount.component';
import { AddeditBankaccountComponent } from './bankaccount/addedit-bankaccount/addedit-bankaccount.component';
import { LoanComponent } from './loan/loan.component';
import { ShowLoanComponent } from './Loan/show-loan/show-loan.component';
import { AddeditLoanComponent } from './Loan/addedit-loan/addedit-loan.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { ShowApplicationsComponent } from './loan-application/show-applications/show-applications.component';
import { AddeditApplicationComponent } from './loan-application/addedit-application/addedit-application.component';
import { EmpSettingsComponent } from './emp-settings/emp-settings.component';
import { CustSettingsComponent } from './cust-settings/cust-settings.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
