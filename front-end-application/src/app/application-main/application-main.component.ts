import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Event,Router,NavigationStart,NavigationEnd} from '@angular/router'
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';
import { DataSharingService } from '../data-sharing.service';
import { SharedService } from '../shared.service';
import { HelpComponent } from './help/help.component';

@Component({
  selector: 'app-application-main',
  templateUrl: './application-main.component.html',
  styleUrls: ['./application-main.component.css']
})
export class ApplicationMainComponent implements OnInit {

  notificationsRoute = ''

  title = 'front-end';
  isCustomer = false 
  spinnerStatus = false;
  loggedInUser : any = {userFirstName:'',userLastName:''}
  image : any
  custEmail : any
  toolbarColor = ''
  noOfRequests : any

  custTransactions = 0
  custRequests = 0
  custComplaints = 0
  totalNotifications : any

  constructor(private dialog:MatDialog,private router:Router,private service:SharedService,private dataService : DataSharingService) {
    if(sessionStorage.getItem("isCustomer"))
    {
      this.isCustomer = true
      this.getLoggedInCustData()
      this.loadCounters()
      this.toolbarColor = 'accent'
      this.notificationsRoute = 'notifications'
    }else
    {
      this.notificationsRoute = 'viewcomplaint'
      this.getLoggedInData()
      this.toolbarColor = 'primary'
      this.loadNumberOfRequests()
      this.loadComplaintCounter()
    }
  }

  loadComplaintCounter()
  {
    this.service.fetchComplaintsCounter().subscribe(data=>{
      this.totalNotifications = data
    })
  }


  loadCounters()
  {
    var val = {accAccountCode:sessionStorage.getItem('accNo'),accCustomerId:sessionStorage.getItem('userId')}
    this.service.fetchAllCounterForCustDashboard(val).subscribe((data:any)=>{
      this.custComplaints = data.complaints
      this.custTransactions = data.transactions
      this.custRequests = data.requests
      this.totalNotifications = data.notifications
    })
  }

  loadNumberOfRequests()
  {
    this.service.getNumberOfRequests().subscribe(data=>{
      this.noOfRequests = data
    })
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
    if(sessionStorage.getItem("isCustomer"))
    {
      this.router.navigate(['onlinebanking/custsettings']);
    }
    else
    {
      this.router.navigate(['onlinebanking/empsettings']);  
    }
    
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
    this.custEmail = val.custEmail
    this.loggedInUser = record
  }

  setData(val : any)
  {
    var record = {userFirstName:val.empFirstName,userLastName:val.empLastName}
    this.image = this.service.photoURL+val.empImagePath
    this.loggedInUser = record
  }

  getHelp()
  {
    this.dialog.open(HelpComponent)
  }

}
