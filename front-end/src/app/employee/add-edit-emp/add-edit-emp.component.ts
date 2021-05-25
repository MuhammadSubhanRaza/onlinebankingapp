import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  employeeForm : FormGroup
  departmentsList : any
  isUpdate :boolean
  gender = {male:0,female:1}
  photoFilePath : string
  photoFileName : string
  password : any
  username : any
  employeeObj : any

  empId = 0

  constructor(private router:Router ,private dataService:DataSharingService, private formBuilder : FormBuilder,private service : SharedService,private snackbar:MatSnackBar) { 
     if(!dataService.isUpdate)
    {
      this.setFormForNotUpdate();
    }
    else
    {
      this.setFormForUpdate(dataService.getData())
    }
    this.loadDepartmentsList()
    this.initializeForm()
   
  }

  ngOnInit(): void {
  }

  initializeForm()
  {
    this.employeeForm = this.formBuilder.group({
      txtFirstName : ['',Validators.required],
      txtLastName : ['',Validators.required],
      txtPhone : ['',Validators.required],
      txtEmail:['',Validators.required],
      txtDob : ['',Validators.required],
      txtQualification:['',Validators.required],
      ddlDepartment:['',Validators.required],
      txtSalary:['',Validators.required],
      txtUserName:new FormControl({value:'',disabled:true}),
      txtPassword:new FormControl({value:'',disabled:true}),
      txtImageName:['',Validators.required],
      rdbGender:Boolean
    })
  }


  dateFilter = date=>{
    const day = date.getDay();
    return day!=0 && day!=6
  }

  loadDepartmentsList(){
    this.service.fetchDepartments().subscribe(data=>{
      this.departmentsList = data;
    })
  }

  onSubmit()
  {
    var val = {empId:this.empId,empFirstName:this.employeeForm.controls['txtFirstName'].value,
              empLastName:this.employeeForm.controls['txtLastName'].value,
              empContact : this.employeeForm.controls['txtPhone'].value,
              empEmail : this.employeeForm.controls['txtEmail'].value,
              empGender : this.employeeForm.controls['rdbGender'].value,
              empDateOfBirth : this.employeeForm.controls['txtDob'].value,
              empDepartment : this.employeeForm.controls['ddlDepartment'].value,
              empQualification : this.employeeForm.controls['txtQualification'].value,
              empUserName : this.username,
              empPassword : this.password,
              empSalary : this.employeeForm.controls['txtSalary'].value,
              empImagePath : this.photoFileName
            }
      if(!this.dataService.isUpdate){
        this.service.addEmployee(val).subscribe(data=>{
          this.snackbar.open("New Employee Added Successfully!","Okay",{duration:3000})
        })
      }
      else
      {
        this.service.updateEmployee(val).subscribe(data=>{
          this.dataService.isUpdate=false;
          this.dataService.data = null
          this.dataService.updateflag = true
          this.router.navigate(['employees/view'])
        })
      }
  }

  onReset()
  {
    this.employeeForm.reset()
  }

  uploadPhoto(event)
  {
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedfile',file,file.name);

    this.service.uploadPhoto(formData).subscribe(data=>{
      this.photoFileName = data.toString()
      this.photoFilePath = this.service.photoURL+this.photoFileName
    })
  }

  genrateAccountDetails()
  {
    this.username = this.generateUserName()
    this.password = this.generatePassword()
  }

  private generateUserName(){
    return this.employeeForm.controls['txtFirstName'].value+"_"+this.employeeForm.controls['txtLastName'].value+this.getRandomInteger(100,800)
  }

  private generatePassword(){
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

  setFormForNotUpdate()
  {
    this.employeeObj = {
      empId:0,empFirstName:'',empLastName:'',empContact:'',empEmail:'',empGender:Boolean,empDateOfBirth:'',
      empQualification:'',empDepartment:0,empSalary:0,empUserName:'',empPassword:''
    }
  }

  setFormForUpdate(val:any)
  {
     this.employeeObj = {
      empId:val.empId,empFirstName:val.empFirstName,empLastName:val.empLastName,
      empContact:val.empContact,empEmail:val.empEmail,empGender:val.empGender,empDateOfBirth:val.empDateOfBirth,
      empQualification:val.empQualification,empDepartment:val.empDepartment,empSalary:val.empSalary,
      empUserName:val.empUserName,empPassword:val.empPassword
    }
    this.empId = val.empId
    this.username = val.empUserName
    this.password = val.empPassword
    this.photoFileName = val.empImagePath
    this.photoFilePath = this.service.photoURL+val.empImagePath
  }

}
