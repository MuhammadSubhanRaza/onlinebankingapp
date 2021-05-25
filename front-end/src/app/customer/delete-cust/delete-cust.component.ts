import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-cust',
  templateUrl: './delete-cust.component.html',
  styleUrls: ['./delete-cust.component.css']
})
export class DeleteCustComponent implements OnInit {

  imageUrl :any
  customerRecord : any

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private service : SharedService) { 
    this.imageUrl = service.photoURL+data.custImagePath
    this.customerRecord = data
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.service.deleteCustomer(this.customerRecord).subscribe(data=>{
      this.service.changeState()
    })
  }

}
