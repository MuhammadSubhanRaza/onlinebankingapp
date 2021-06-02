import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  imageUrl :any
  employeeRecord : any

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private service : SharedService) {
    this.imageUrl = service.photoURL+data.empImagePath
    this.employeeRecord = data
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.service.deleteEmployee(this.employeeRecord).subscribe(data=>{
      this.service.changeState()
    })
  }

}
