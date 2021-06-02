import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detial-acc',
  templateUrl: './detial-acc.component.html',
  styleUrls: ['./detial-acc.component.css']
})
export class DetialAccComponent implements OnInit {

  accountRecord : any

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.accountRecord = data

   }

  ngOnInit(): void {
  }

}
