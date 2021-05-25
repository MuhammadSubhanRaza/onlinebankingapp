import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  department:any

  constructor(private service:SharedService,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
      this.loadDetails()
     }

  ngOnInit(): void {
  }

  loadDetails()
  {
    this.service.detailDepartment(this.data).subscribe(result=>{
      this.department = result
    })
  }

}
