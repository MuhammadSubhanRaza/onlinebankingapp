import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLoginComponent } from './app-login/app-login.component';
import { ApplicationMainComponent } from './application-main/application-main.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    ApplicationMainComponent,
    CustomerLoginComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
