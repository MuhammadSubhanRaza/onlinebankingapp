import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-detail-cust',
  templateUrl: './detail-cust.component.html',
  styleUrls: ['./detail-cust.component.css']
})
export class DetailCustComponent implements OnInit {

  custDetails : any
  imagePath : any

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private service : SharedService) { 
    this.custDetails = data
    this.imagePath = service.photoURL+data.custImagePath
  }

  ngOnInit(): void {
  }

}
