import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component'
import { AddEditEmpComponent } from './Employee/add-edit-emp/add-edit-emp.component';
import { EmployeeComponent } from './employee/employee.component'
import { ShowEmpComponent } from './employee/show-emp/show-emp.component'


const routes : Routes = [
  {path:"employees",component:EmployeeComponent,children:[
    {path:"view",component:ShowEmpComponent},
    {path:"addedit",component:AddEditEmpComponent}
  ]},
  {path:"departments",component:DepartmentsComponent}
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
