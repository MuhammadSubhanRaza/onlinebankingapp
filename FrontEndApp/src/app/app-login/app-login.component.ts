import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  constructor(private router : Router) { }

  loginUserPassword : any
  loginUserName : any

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(["onlinebanking"])
    localStorage.setItem("loginCred","subhan")
  }

  
}
