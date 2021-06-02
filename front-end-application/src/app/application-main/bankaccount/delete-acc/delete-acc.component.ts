import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-acc',
  templateUrl: './delete-acc.component.html',
  styleUrls: ['./delete-acc.component.css']
})
export class DeleteAccComponent implements OnInit {

  accountRecord : any

  constructor(@Inject (MAT_DIALOG_DATA) public data : any ,private service : SharedService) 
  { 
    this.accountRecord = data

  }

  ngOnInit(): void {
  }



  onSubmit()
  {
    this.service.deleteAccount(this.accountRecord).subscribe(data=>{
      this.service.changeState()
    })
  }

}
