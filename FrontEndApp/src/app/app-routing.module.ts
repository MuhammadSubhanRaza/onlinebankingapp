import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login/app-login.component'
import { ApplicationMainComponent } from './application-main/application-main.component'
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';



const routes : Routes = [
  {path:'login',component:AppLoginComponent},
  {path:'onlinebanking',component:ApplicationMainComponent},
  {path:'customerlogin',component:CustomerLoginComponent},
  {path:'welcome',component:WelcomeScreenComponent}
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
