import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-give-loan',
  templateUrl: './give-loan.component.html',
  styleUrls: ['./give-loan.component.css']
})
export class GiveLoanComponent implements OnInit {

  accountNoStartingDigits = "PK36OBA000000112345"
  accountNoLastDigits : any
  accountDetails : any
  currentDate : any
  amountToTransfer : any
  password : any
  confirmPassword : any

  fixedDisabled = true
  changeDisabled = true

  constructor(private router:Router,private snackBar : MatSnackBar,private service  :SharedService) { }

  ngOnInit(): void {
  }


  onSubmit()
  {
    if(this.password==null || this.confirmPassword==null)
    {
      this.snackBar.open("Please Enter the Password","Okay",{duration : 3000});
    }
    else
    {
      if(this.password!=this.confirmPassword)
      {
        this.snackBar.open("Passwords do not match","Okay",{duration : 3000});
      }
      else
      {
        var val = {loanId:0,loanCustomerId:this.accountDetails.accCustomerId,
        loanDateOfTransfer:this.currentDate,loanAmountTransffered:this.amountToTransfer,
        loanAccouontId:this.accountDetails.accId}
        this.service.addGiveLoan(val).subscribe(data=>{
          this.router.navigate(['onlinebanking/allloanapplications'])
          sessionStorage.setItem("loanGiven","true")
        })
      }
    }
  }



  verifyAccount()
  {
    if(this.accountNoLastDigits==null)
    {
      this.snackBar.open("Please Enter Account Number","Okay",{duration : 3000});
    }
    else
    {
      var no = this.accountNoStartingDigits + this.accountNoLastDigits
        var val = {accAccountCode : no}
        this.service.getAccountDetailsFromAccountNo(val).subscribe(data=>{
          if(data==null)
          {
            this.snackBar.open("Account Not Found","Okay",{duration : 3000});
          }
          else
          {
            this.accountDetails = data
            this.snackBar.open("Account Verified","Okay",{duration : 3000});
            this.changeDisabled = false
            this.currentDate = this.getCurrentDate()
          }
      })
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
