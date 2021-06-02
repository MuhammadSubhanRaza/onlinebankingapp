import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginUserPassword : any
  loginUserName : any
  adminLoginForm : FormGroup
  invalidLogin : boolean

  loggedInData : any

  constructor(private dataService:DataSharingService,private router : Router, private formBuilder:FormBuilder, private service : SharedService) {
    this.initializeForm()
   }

  ngOnInit(): void {
  }

  initializeForm()
  {
    this.adminLoginForm = this.formBuilder.group({
      txtUserName : ['',Validators.required],
      txtPassword : ['',Validators.required]
    })
  }

  onSubmit()
  {
    this.service.getLoginCredentials(this.loginUserName,this.loginUserPassword).subscribe(response=>{
      const token = (<any>response).token;
      this.setLoggedInDataData((<any>response).emp)
      localStorage.setItem("jwt",token);
      localStorage.setItem("empjwt",token);
      this.invalidLogin = false;
      this.router.navigate(["onlinebanking/admindashboard"]);
    },err=>{
      this.invalidLogin = true;
    })
  }

  setLoggedInDataData(data:any)
  {
    // var val = {userFirstName : data.empFirstName,userLastName:data.empLastName,
    // userImagePath:data.empImagePath}
    // this.dataService.loggedInUser = val
    sessionStorage.setItem("userId",data.empId)
  }

}
