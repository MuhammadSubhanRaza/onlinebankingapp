import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Chart,registerables } from 'chart.js'

@Component({
  selector: 'app-cust-settings',
  templateUrl: './cust-settings.component.html',
  styleUrls: ['./cust-settings.component.css'],
})
export class CustSettingsComponent implements OnInit {

  custLogin : any
  accDetails : any
  newPassword = ''
  confirmPassword = ''
  oldPassword = ''
  leftChart : any = []
  
  constructor(private router : Router,private service : SharedService, private snackbar: MatSnackBar) {
    Chart.register(...registerables)
    this.loadData()
    this.loadAccountData()
    this.initializeForm()
    this.loadGraphData()
  }

  ngOnInit(): void 
  {

  }

  initializeForm()
  {
    this.custLogin = {custId:0,custFirstName:'',
              custLastName:'',
              custContact : '',
              custEmail : '',
              custGender : '',
              custDob : '',
              custCity : '',
              custOccupation : '',
              custNic : '',
              custAddress : '',
              custImagePath : ''
            }
    this.accDetails ={accId:0,accCustomerId:0,accType:0,
            accOpeningBalance:0,
            accDateOfOpening:'',
            accStatus: 0,
            accBranchId:0,
            accAccountCode:'',
            accLoginName:'',
            accPassword:'',
            accTypeNavigation:{
              actypeName:''
            }
    }
  }

  loadData()
  {
    var val = parseInt(sessionStorage.getItem('userId'))
    this.service.detailCustomer(val).subscribe((data:any)=>{
      this.custLogin = data
    })
  }


  loadGraphData()
  {
    var val = sessionStorage.getItem('accNo')
    var acc = {tranAccountNoSender : val}
    this.service.getGraphDataOnCustSettings(acc).subscribe((data:any)=>{
      const d = data['graphData'].map(data=>data.val)
      const e = data['graphData'].map(data=>data.date)
      this.generateChart(d,e)
    })
  }

  loadAccountData()
  {
    var val = sessionStorage.getItem('accNo')
    var acc = {accAccountCode : val}
    this.service.getAccountDetailsFromAccountNo(acc).subscribe((data:any)=>{
      this.accDetails = data
    })
  }

  onSubmit()
  {
    if(this.newPassword!=this.confirmPassword)
    {
      this.snackbar.open("Passwords do not match","Okay",{duration:3000})
    }
    else
    {
      if(this.oldPassword!=this.accDetails.accPassword)
      {
        this.snackbar.open("Please enter the correct current password","Okay",{duration:3000})
      }
      else
      {
        this.accDetails.accPassword = this.newPassword
        this.service.updateAccount(this.accDetails).subscribe((data:any)=>{
          this.service.Customerlogout()
          this.router.navigate(['welcome'])
        })
      }
    }
  }


  generateChart(data :any , date : any)
  {
    var delayed;
    this.leftChart = new Chart('canvas',{
       type: 'bar',
        data: {
          labels: date,
          datasets: [{
            label:"All Transactions",
            data: data,
          }]
    },
    options: {  
      backgroundColor:'orange',
      responsive:true,
      animation : {
         onComplete: () => {
          delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context['type'] === 'data' && context['mode'] === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
      },
      maintainAspectRatio:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    })
  }


}
