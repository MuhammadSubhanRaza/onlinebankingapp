import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.showTransationSuccessfullNotification()
  }

  showTransationSuccessfullNotification()
  {
    if(sessionStorage.getItem("isInsert")=="true")
    {
      this.snackBar.open("Transaction Completed Successfuly","Okay",{duration:3000})
      sessionStorage.removeItem("isInsert");
    }
          
  }
  

}
