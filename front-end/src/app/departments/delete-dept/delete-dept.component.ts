import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-dept',
  templateUrl: './delete-dept.component.html',
  styleUrls: ['./delete-dept.component.css']
})
export class DeleteDeptComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private service:SharedService
  ) { }

  ngOnInit(): void {
  }

  DepartmentName = this.data.deptName

  onSubmit()
  {
    this.service.deleteDepartment(this.data).subscribe({
      next:para=>{
        this.service.changeState()
      },
      error:err=>{
        alert('An error occured')
      }
    })
  }

}
