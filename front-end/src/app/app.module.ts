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
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDeptComponent } from './departments/delete-dept/delete-dept.component'
import { FormsModule } from '@angular/forms'
import { SharedService } from './shared.service';
import { FooterComponent } from './footer/footer.component';
import { DeptDetailsComponent } from './departments/dept-details/dept-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MakeTransComponent } from './transactions/make-trans/make-trans.component';
import { ViewTransComponent } from './transactions/view-trans/view-trans.component';
import { PrintTransComponent } from './transactions/print-trans/print-trans.component';
import { DeleteBranchComponent } from './branch/delete-branch/delete-branch.component';
import { DetailBranchComponent } from './branch/detail-branch/detail-branch.component';
import { DetailsEmpComponent } from './employee/details-emp/details-emp.component';
import { DeleteEmpComponent } from './employee/delete-emp/delete-emp.component';
import { DeleteCustComponent } from './customer/delete-cust/delete-cust.component';
import { DetailCustComponent } from './customer/detail-cust/detail-cust.component';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
