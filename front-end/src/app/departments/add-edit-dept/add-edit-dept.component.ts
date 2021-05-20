import { Component, Inject, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShowDeptComponent } from '../show-dept/show-dept.component';
import { SharedService } from './../../shared.service'

@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {

  departmentForm : FormGroup;
  dept : ShowDeptComponent
  isUpdate : boolean

  departmentId : any
  departmentName : string 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
  private service : SharedService) {
    if(this.data==null){
      this.departmentId = 0
      this.departmentName = ''
    }
    else
    {
      this.departmentId=this.data.deptId
      this.departmentName=this.data.deptName
      this.isUpdate = true
    }
   }

  ngOnInit(): void {
    this.departmentForm = new FormGroup({
      txtDepartmentName : new FormControl()
    });
    
  }

  status= false

  onSubmit() : void
  {
    var val = {deptId:this.departmentId,
    deptName:this.departmentForm.controls['txtDepartmentName'].value}
    if(this.isUpdate)
    {
      this.service.updateDepartment(val).subscribe(data=>{
        this.service.changeModifiedState()
      })
      this.isUpdate = false
    }
    else{
      this.service.addDepartment(val).subscribe(data=>{
        this.service.changeState()
      })
      console.log(val)
    }
  }

}
