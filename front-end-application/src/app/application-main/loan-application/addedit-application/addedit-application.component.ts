import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addedit-application',
  templateUrl: './addedit-application.component.html',
  styleUrls: ['./addedit-application.component.css']
})
export class AddeditApplicationComponent implements OnInit {

  applicationForm : FormGroup
  applicationObject : any

  constructor(private router:Router , private formBuilder : FormBuilder,private service : SharedService,private snackbar:MatSnackBar) 
  { 
    this.setForm();
    this.intializeForm();
  }

  ngOnInit(): void {
  }

  setForm()
  {
    this.applicationObject = {loanAppId:0,loanAppCustId:0,loanAppSubject:'',
    loanAppBody:'',loanAppMoneyAsked:0,loanNumberOfInstallments:0,loanReason:0,
    loanIsAccepted:false}
  }

  intializeForm()
  {
    this.applicationForm = this.formBuilder.group({
      txtSubject : ['',Validators.required],
      txtBody : ['',Validators.required],
      txtAmount : ['',Validators.required],
      txtReason : ['',Validators.required],
      txtInstallments : ['',Validators.required]
    })
  }

  onSubmit()
  {
    var custId = parseInt(sessionStorage.getItem('userId'))
    var val = {
      loanAppId:0,loanAppCustId:custId,loanAppSubject:this.applicationForm.controls['txtSubject'].value,
      loanAppBody:this.applicationForm.controls['txtBody'].value,loanAppMoneyAsked:this.applicationForm.controls['txtAmount'].value
      ,loanNumberOfInstallments:this.applicationForm.controls['txtInstallments'].value,loanReason:this.applicationForm.controls['txtReason'].value,
      loanIsAccepted:false
    }

    this.service.addLoanApplication(val).subscribe(data=>{
      this.router.navigate(['onlinebanking/customerdashboard'])
      sessionStorage.setItem('applicationSent','true')
     
    })
  }

}
