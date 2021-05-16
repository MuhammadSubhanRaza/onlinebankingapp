import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AddeditCustComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
