import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addedit-cust',
  templateUrl: './addedit-cust.component.html',
  styleUrls: ['./addedit-cust.component.css']
})
export class AddeditCustComponent implements OnInit {

  customerForm : FormGroup
  citiesList : any
  isUpdate :boolean
  gender = {male:0,female:1}
  photoFilePath : string
  photoFileName : string
  custId :any
  custObj:any

  constructor(private router:Router ,private dataService:DataSharingService, private formBuilder : FormBuilder,private service : SharedService,private snackbar:MatSnackBar) { 
    
    if(!dataService.isUpdate)
    {
      this.setFormForAdd()
    }
    else
    {
      this.setFormForUpdate(dataService.getData())
    }

    this.initializeForm()
    this.loadCities()
  }

  ngOnInit(): void {
  }

  initializeForm()
  {
    this.customerForm = this.formBuilder.group({
      txtFirstName : ['',Validators.required],
      txtLastName : ['',Validators.required],
      txtContact : ['',Validators.required],
      txtEmail:['',Validators.required],
      txtDob : ['',Validators.required],
      txtAddress : ['',Validators.required],
      txtOccupation:['',Validators.required],
      txtCNIC:['',Validators.required],
      ddlCity:['',Validators.required],
      txtImageName:['',Validators.required],
      rdbGender:Boolean
    })
  }

  imageStatus = false

  setImageStatus(){
    this.imageStatus = true;
  }

  onSubmit()
  {
     var val = {custId:this.custId,custFirstName:this.customerForm.controls['txtFirstName'].value,
              custLastName:this.customerForm.controls['txtLastName'].value,
              custContact : this.customerForm.controls['txtContact'].value,
              custEmail : this.customerForm.controls['txtEmail'].value,
              custGender : this.customerForm.controls['rdbGender'].value,
              custDob : this.customerForm.controls['txtDob'].value,
              custCity : this.customerForm.controls['ddlCity'].value,
              custOccupation : this.customerForm.controls['txtOccupation'].value,
              custNic : this.customerForm.controls['txtCNIC'].value,
              custAddress : this.customerForm.controls['txtAddress'].value,
              custImagePath : this.photoFileName
            }


    if(!this.dataService.isUpdate)
    {
      this.service.addCustomer(val).subscribe(data=>{
        this.dataService.insertFlag = true
        this.router.navigate(['onlinebanking/customers/view'])
      })
    }
    else{
      this.service.updateCustomer(val).subscribe(data=>{
        this.dataService.updateflag = true
        this.router.navigate(['onlinebanking/customers/view'])
      })
    }

  }

  loadCities()
  {
    this.service.fetchCitiesList().subscribe(data=>{
      this.citiesList = data
    })
  }

  uploadPhoto(event)
  {
    this.setImageStatus()
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedfile',file,file.name);

    this.service.uploadCustomerPhoto(formData).subscribe(data=>{
      this.photoFileName = data.toString()
      this.photoFilePath = this.service.photoURL+this.photoFileName
    })
  }

  setFormForAdd()
  {
    this.custObj = {
      custId:0,custFirstName:'',custLastName:'',custContact:'',custEmail:'',custGender:Boolean,custDob:'',
      custAddress:'',custNic:'',custCity:0,custOccupation:''
    }
    this.custId = 0;
  }

  setFormForUpdate(val:any)
  {
    this.setImageStatus()
    this.custObj = {
      custId:val.custId,custFirstName:val.custFirstName,custLastName:val.custLastName,custContact:val.custContact,
      custEmail:val.custEmail,custGender:val.custGender,custDob:val.custDob,
      custAddress:val.custAddress,custNic:val.custNic,custCity:val.custCity,custOccupation:val.custOccupation
    }
    this.custId = val.custId
    this.photoFileName = val.custImagePath
    this.photoFilePath = this.service.photoURL+val.custImagePath
  }

}
