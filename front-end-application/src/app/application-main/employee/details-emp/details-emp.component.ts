import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-details-emp',
  templateUrl: './details-emp.component.html',
  styleUrls: ['./details-emp.component.css']
})
export class DetailsEmpComponent implements OnInit {

  empDetails : any
  imagePath : any

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private service : SharedService) {
    this.empDetails = data
    this.imagePath = service.photoURL+data.empImagePath
   }

  ngOnInit(): void {
  }


}
