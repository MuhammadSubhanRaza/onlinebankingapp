import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApplicationMainComponent } from './application-main/application-main.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './guard/auth-guard.service';
import { EmpAuthGuard } from './guard/emp-auth-guardservice'

const routes : Routes = [
  {path:'login',component:AdminLoginComponent},
  {path:'onlinebanking',component:ApplicationMainComponent,canActivate:[AuthGuard]},
  {path:'customerlogin',component:CustomerLoginComponent},
  {path:'welcome',component:WelcomeComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
