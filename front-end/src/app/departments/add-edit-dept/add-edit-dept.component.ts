import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
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

  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.departmentForm = new FormGroup({
      txtDepartmentName : new FormControl()
    });
  }
  val : any

  status= false

  onSubmit() : void
  {
    this.val = {DeptId:0,DeptName:this.departmentForm.controls['txtDepartmentName'].value}
    this.service.addDepartment(this.val).subscribe(data=>{
      this.service.changeState()
    })
  }

}
