import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-emp-settings',
  templateUrl: './emp-settings.component.html',
  styleUrls: ['./emp-settings.component.css'],
})
export class EmpSettingsComponent implements OnInit {

  loggedInUser : any
  newPassword: any
  confirmPassword : any
  oldPassword : any

  constructor(private router:Router ,private service : SharedService,private snackBar : MatSnackBar) 
  {
    this.getLoggedInData()
  }

  ngOnInit(): void {}

  isDisabled = true 



  onSave()
  {
    if(this.newPassword!=this.confirmPassword)
    {
      this.snackBar.open("Passwords do not match, type in confrim password similar to new password","Okay",{duration:3000})
    }
    else
    {
      if(this.oldPassword!=this.loggedInUser.empPassword)
      {
        this.snackBar.open("Please input the correct password","Okay",{duration:3000})
      }
      else
      {
        if(this.newPassword.length>8){
          this.loggedInUser.empPassword = this.newPassword
          this.service.updateEmployee(this.loggedInUser).subscribe(data=>{
          this.service.logout()
          this.router.navigate(['login'])
          })
        }
        else
        {
          this.snackBar.open("Password must be greater than eight characters","Okay",{duration:3000})
        }
      }
    }
  }


  onChangeDisablity()
  {
    this.isDisabled = false
  }

  getLoggedInData()
  {
    var id = sessionStorage.getItem("userId");
    this.service.detailEmployee(parseInt(id)).subscribe(data=>{
      this.loggedInUser = data
    })
  }

}
