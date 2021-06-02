import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  cstUserName : any
  cstPassword : any
  invalidLogin : any

  constructor(private service :SharedService,private router : Router,private dataServie : DataSharingService) { }

  ngOnInit(): void {
  }

  login()
  {
    var customer = {accLoginName:this.cstUserName,accPassword:this.cstPassword}
    this.service.getCustomerLoginCredentials(customer).subscribe(response=>{
      const token = (<any>response).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false;
      sessionStorage.setItem("isCustomer","true");
      sessionStorage.setItem("accNo",(<any>response).acc.accAccountCode);
      sessionStorage.setItem("userId",(<any>response).acc.accCustomerId);
      this.router.navigate(["onlinebanking/customerdashboard"]);
    },err=>{
      this.invalidLogin = true;
    }
    )
  }

}
