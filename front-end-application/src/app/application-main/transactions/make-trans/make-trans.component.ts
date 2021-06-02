import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-make-trans',
  templateUrl: './make-trans.component.html',
  styleUrls: ['./make-trans.component.css']
})
export class MakeTransComponent implements OnInit {

  currentPassword : any
  confirmPassword:  any
  accountNo  = "PK36OBA000000112345"
  accountNoLastDigits : any
  description: any
  amountToTransfer : any
  accountDetail : any

  constructor(private dataSharing : DataSharingService, private service : SharedService,private snackBar : MatSnackBar,private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit()
  {
    var id = parseInt(sessionStorage.getItem("userId"))
    this.checkAuthenticityOfUser()
  }

  
  accCode = sessionStorage.getItem("accNo")

  checkAuthenticityOfUser()
  {
    if(this.currentPassword!=this.confirmPassword)
    {
      this.snackBar.open("Password did to match","Okay",{duration:3000})
      return false;
    }
    else
    {
      var val = {accAccountCode:this.accCode,accPassword:this.confirmPassword}
      this.service.authenticateAccountBeforeTransaction(val).subscribe((data:any)=>{
        if(data.result==true)
        {
          this.accountDetail= data.acc
          this.doTransaction()
        }
        else{
          this.snackBar.open("Comething went wrong","Okay",{duration:3000})
        }
      })
    }
  }


  doTransaction()
  {
      if(this.amountToTransfer>this.accountDetail.accOpeningBalance)
      {
        this.snackBar.open("You can not make transaction, The amount you are sending is greater than the amount in your account","Okay",{duration:5000})
      }
      else
      {
        var val={tranAccountNoSender:this.accCode,
          tranAccountNoReciever:this.accountNo+this.accountNoLastDigits,tranDescription:this.description,
          tranDate:this.getCurrentDate(),tranAmountTransffered:this.amountToTransfer}

          this.service.makeTransaction(val).subscribe(
            next=>{
              sessionStorage.setItem("isInsert","true")
              this.router.navigate(['onlinebanking/customerdashboard'])
            },
            error=>{
              this.snackBar.open("Something went wrong","Okay",{duration:3000})
            }
          )
      }
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
