import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-generate-notification',
  templateUrl: './generate-notification.component.html',
  styleUrls: ['./generate-notification.component.css']
})
export class GenerateNotificationComponent implements OnInit {

  notificationSubject : any
  notificationBody : any
  allCustomers : any
  currentDate : any

  constructor(private service:SharedService,private snackBar:MatSnackBar) { 
    this.getAllCustomers()
    this.currentDate = this.getCurrentDate()
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.allCustomers.forEach(element => {
      var val = {notTo:element.custId,notSubject:this.notificationSubject,
        notBody:this.notificationBody,notDate:this.currentDate,notHasRead:0}
        this.service.addNotification(val).subscribe(data=>{
          this.snackBar.open("Notification sent","Okay",{duration:1000})
        })
    });
  }

  getAllCustomers()
  {
    this.service.fetchCutomers().subscribe(data=>{
      this.allCustomers = data
    })
  }

  getCurrentDate()
   {
     var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      return yyyy+"/"+mm+"/"+dd
   }

}
