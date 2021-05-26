import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserName : any
  loginUserPassword : any


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    // alert(this.loginUserName)
    // if(this.loginUserName=="admin" && this.loginUserPassword=="admin123")
    // {
    //   this.router.navigate(['main'])
    // }
    this.router.navigate(['main'])
  }

}
