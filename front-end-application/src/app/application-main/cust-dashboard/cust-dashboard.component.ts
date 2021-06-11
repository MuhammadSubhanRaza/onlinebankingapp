import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/shared.service';
import { Chart,registerables } from 'chart.js'

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  accountDetails : any
  customerDetails : any
  currentTransactions : any
  accountType = ''
  accCode = ''
  accOpeningBalance = 0
  custName = ''
  custEmail = ''
  leftChart : any = []


  constructor(private snackBar:MatSnackBar,private service : SharedService) { 
    if(sessionStorage.getItem('applicationSent')=='true')
    {
      this.snackBar.open("Application Sent Successfuly","Okay",{duration:3000})
      sessionStorage.removeItem('applicationSent');
       window.location.reload()
    }
    else if(sessionStorage.getItem('complainSent')=='true')
    {
      this.snackBar.open("Complain Sent Successfuly","Okay",{duration:3000})
      sessionStorage.removeItem('complainSent');
    }
    Chart.register(...registerables)
    this.getCurrenTransactions()
    this.getCustomerDetails()
    this.getAccountDetails()
    this.loadGraphData()
  }

  getCurrenTransactions()
  {
    var accNo = sessionStorage.getItem("accNo")
    var val = {accAccountCode : accNo}
    this.service.fetchCurrentTransactionsForCustDashboard(val).subscribe(data=>{
      this.currentTransactions = data
    })
  }

  getCustomerDetails()
  {
    var val = parseInt(sessionStorage.getItem("userId"))
    this.service.fetchCustomerDetailsOnCustDasshboard(val).subscribe((data:any)=>{
      this.customerDetails = data
      this.custName = data.custFirstName +" "+ data.custLastName
      this.custEmail = data.custEmail
    })
  }

  getAccountDetails()
  {
    var accNo = sessionStorage.getItem("accNo")
    var val = {accAccountCode : accNo}
    this.service.getAccountDetailsFromAccountNo(val).subscribe((data:any)=>{
      this.accountDetails = data
      this.accountType = data.accTypeNavigation.actypeName
      this.accCode = data.accAccountCode
      this.accOpeningBalance = data.accOpeningBalance
    })
  }

  ngOnInit(): void {
    this.showTransationSuccessfullNotification()
  }

  showTransationSuccessfullNotification()
  {
    if(sessionStorage.getItem("isInsert")=="true")
    {
      this.snackBar.open("Transaction Completed Successfuly","Okay",{duration:3000})
      sessionStorage.removeItem("isInsert");
    }
          
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
