import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addedit-bankaccount',
  templateUrl: './addedit-bankaccount.component.html',
  styleUrls: ['./addedit-bankaccount.component.css']
})
export class AddeditBankaccountComponent implements OnInit {

  customerRecord : any
  searchString : any
  customerGender : any
  accountForm : any
  accountId : any
  customerId: any
  accountNo : any 
  accpassword: any
  accLoginName : any
  lastCustRecord : any
  currentDate : any
  accountTypeList : any
  branchList : any
  lastAccountRecord : any
  accType : any
  accBalance : any
  accBranch : any
  recordForUpdate : any
  accStatus : any

  constructor(private dataService:DataSharingService, private router:Router ,private service:SharedService,private formBuilder : FormBuilder,private snackBar : MatSnackBar) {
    if(!this.dataService.isUpdate)
    {
      this.loadRecord()
      this.loadLastAccRecord()
      this.currentDate = this.getCurrentDate()
    }
    else
    {
      this.recordForUpdate = this.dataService.getData()
      this.setFormForUpdate()
    }
    this.populateBrnachList()
    this.initializeForm()
    this.intializeSearchedCustomerFields()
   }

   getCurrentDate()
   {
     var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      return yyyy+"/"+mm+"/"+dd
   }

  ngOnInit(): void {
  }


  setFormForUpdate()
  {
    this.accType = this.recordForUpdate.accType
    this.accBalance = this.recordForUpdate.accOpeningBalance
    this.currentDate = this.recordForUpdate.accDateOfOpening
    this.accBranch = this.recordForUpdate.accBranchId
    this.accountNo = this.recordForUpdate.accAccountCode
    this.accLoginName = this.recordForUpdate.accLoginName
    this.accpassword = this.recordForUpdate.accPassword
    this.accStatus = this.recordForUpdate.accStatus
    this.accountId = this.recordForUpdate.accId
    this.customerId = this.recordForUpdate.accCustomer.custId
  }


   initializeForm()
  {
    this.accountForm = this.formBuilder.group({
      ddlAccountType : ['',Validators.required],
      txtOperningBalance : ['',Validators.required],
      txtDateOfAccOpening : new FormControl({value:'',disabled:true}),
      ddlBranch:['',Validators.required],
      txtAccountNo : new FormControl({value:'',disabled:true}),
      txtLoginName : new FormControl({value:'',disabled:true}),
      txtPassword: new FormControl({value:'',disabled:true}),
      chkIsActive:['',Validators.required]
    })
  }


  onSubmit(){
    var val={accId:this.accountId,accCustomerId:this.customerId,accType:parseInt(this.accountForm.controls["ddlAccountType"].value),
            accOpeningBalance:this.accountForm.controls["txtOperningBalance"].value,
            accDateOfOpening:this.accountForm.controls["txtDateOfAccOpening"].value,
            accStatus: this.accountForm.controls["chkIsActive"].value,
            accBranchId:this.accountForm.controls["ddlBranch"].value,
            accAccountCode:this.accountNo,
            accLoginName:this.accLoginName,
            accPassword:this.accpassword,
    }
    if(!this.dataService.isUpdate)
    {
      this.service.addAccount(val).subscribe(data=>{
        this.dataService.insertFlag = true
        this.router.navigate(['onlinebanking/bankaccount/view'])
    })
    }
    else if(this.dataService.isUpdate)
    {
      this.service.updateAccount(val).subscribe(data=>{
        this.dataService.updateflag = true
        this.dataService.data = null
        this.router.navigate(['onlinebanking/bankaccount/view'])
    })
    }
    
  }

  generateAccountCredentials()
  {
    this.accountNo = 'PK36OBA0000001123451000'+(this.lastAccountRecord.accId+1);
    this.accLoginName = this.customerRecord.custFirstName+"_"+this.customerRecord.custLastName+"_500"+(this.lastCustRecord.custId+1)
    this.accpassword = this.generatePassword()
  }

  generatePassword(){
     var pass = ''
    for(var i=0;i<10;i++){
      pass+= String.fromCharCode(this.getRandomInteger(33,126));
    }
    return pass
  }

  private getRandomInteger(min,max)
  {
    min = Math.ceil(33);
    max = Math.floor(122);
    return Math.floor(Math.random() * (max - min) + min);   
  }



  loadRecord(){
    this.service.getLastRecord().subscribe(data=>{
      this.lastCustRecord = data
    })
  }

  loadLastAccRecord(){
    this.service.getLastAccountAdded().subscribe(data=>{
      this.lastAccountRecord = data
    })
  }

  populateBrnachList()
  {
    this.service.fetchBranches().subscribe(data=>{
      this.branchList = data
    })
  }



  searchCustomer()
  {
    this.service.getCustomerForAccountCreation(this.searchString).subscribe(
      result=>{
        this.customerRecord = result
        this.populateSearchedFields(result)
      },
      error=>{
        this.snackBar.open("No Match Found","Okay",{duration:3000});
      }
    )
  }

  populateSearchedFields(val:any){
    this.customerRecord={
      custId:val.custId,custFirstName:val.custFirstName,custLastName:val.custLastName,
      custEmail:val.custEmail,custContact:val.custContact,custNic:val.custNic,custGender:val.custGender
    }
    if(val.custGender)
    {
      this.customerGender = "Female"
    }
    else if(!val.custGender)
    {
      this.customerGender = "Male"
    }
    this.customerId = val.custId
  }

  intializeSearchedCustomerFields()
  {
    this.customerRecord = {
      custId:'',custFirstName:'',custLastName:'',custEmail:'',custContact:'',custNic:'',custGender:''
    }
  }

}
