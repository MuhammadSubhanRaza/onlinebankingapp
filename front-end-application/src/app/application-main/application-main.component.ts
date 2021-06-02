import { Component, OnInit } from '@angular/core';
import {Event,Router,NavigationStart,NavigationEnd} from '@angular/router'
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';
import { DataSharingService } from '../data-sharing.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-application-main',
  templateUrl: './application-main.component.html',
  styleUrls: ['./application-main.component.css']
})
export class ApplicationMainComponent implements OnInit {


  title = 'front-end';
  isCustomer = false 
  spinnerStatus = false;
  loggedInUser : any
  image : any

  constructor(private router:Router,private service:SharedService,private dataService : DataSharingService) {
    if(sessionStorage.getItem("isCustomer"))
    {
      this.isCustomer = true
      this.getLoggedInCustData()
    }else
    {
      this.getLoggedInData()
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent:Event)=>{
        if(routerEvent instanceof NavigationStart)
        {
           of(this.title).pipe(delay(500)).subscribe(data=>{
            this.spinnerStatus = false;
          })
        }
        if(routerEvent instanceof NavigationEnd)
        {
          this.spinnerStatus= true;
        }
      })
      
  }

  logout()
  {
    this.service.logout()
    this.router.navigate(['welcome'])
  }

  navigateSettings()
  {
    this.router.navigate(['onlinebanking/empsettings']);
  }

  sideNav = false;

  getLoggedInData()
  {
    var id = sessionStorage.getItem("userId");
    this.service.detailEmployee(parseInt(id)).subscribe(data=>{
      this.setData(data)
    })
  }

  getLoggedInCustData()
  {
    var id = sessionStorage.getItem("userId");
    this.service.detailCustomer(parseInt(id)).subscribe(data=>{
      this.setCustData(data)
    })
  }

  setCustData(val : any)
  {
    var record = {userFirstName:val.custFirstName,userLastName:val.custLastName}
    this.image = this.service.photoURL+val.custImagePath
    this.loggedInUser = record
  }

  setData(val : any)
  {
    var record = {userFirstName:val.empFirstName,userLastName:val.empLastName}
    this.image = this.service.photoURL+val.empImagePath
    this.loggedInUser = record
  }

}
