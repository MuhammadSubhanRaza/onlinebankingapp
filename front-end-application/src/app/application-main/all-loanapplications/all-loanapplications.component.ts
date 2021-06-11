import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-all-loanapplications',
  templateUrl: './all-loanapplications.component.html',
  styleUrls: ['./all-loanapplications.component.css']
})
export class AllLoanapplicationsComponent implements OnInit {

  allApplications : any
  applicationData : any
  customerData : any
  accountData : any

  accounttype = ''
  accountCode = ''
  accountBalance = 0

  image : any

  constructor(private service:SharedService,private router:Router,private snackBar:MatSnackBar) {
    this.getAllAppliations()
    if(sessionStorage.getItem('loanGiven')=='true')
    {
      this.snackBar.open("Loan has been successfuly transferred","Okay",{duration:3000})
      sessionStorage.removeItem('loanGiven')
       window.location.reload()
    }
   }

  ngOnInit(): void {
  }

  getAllAppliations()
  {
    this.service.getAllComplaints().subscribe(data=>{
      this.allApplications = data
    })
  }

  populateDataFromList(item : any)
  {
    this.applicationData = item
    this.image = this.service.photoURL+item.loanAppCust.custImagePath
    var cust = {accCustomerId:item.loanAppCust.custId}
    this.service.getAccountDetailsThroughCustId(cust).subscribe((data:any)=>{
      this.accountData = data.accountData
      this.accounttype = data.accountData.accTypeNavigation.actypeName
      this.accountCode = data.accountData.accAccountCode
      this.accountBalance = data.accountData.accOpeningBalance
    })
  }


  onApprove()
  {
    this.applicationData.loanIsAccepted = true
    this.service.onLoanApprove(this.applicationData).subscribe(data=>{
      this.router.navigate(['onlinebanking/giveloan'])
    })
  }

  onReject()
  {
    this.service.onLoanReject(this.applicationData).subscribe(data=>{
      window.location.reload()
      this.snackBar.open("Loan Application Rejected","Okay",{duration:3000})
    })
  }

}
