import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js'
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  leftChart : any = []
  pieChart : any = []
  doughChart : any = []

  graphData : any = []
  grpahDate : any = []

  imagePath : any
  customerList : any
  indicatorsData : any = {totalAccs:0,totalEmps:0,totalCusts:0,totalComps:0,totalDepts:0}

  constructor(private service : SharedService) { 
    Chart.register(...registerables)
    this.imagePath = service.photoURL
    this.loadGraphData()
    this.loadCustomeListData()
    this.loadIndicatorsData()
  }

  ngOnInit(): void {
  }


  loadIndicatorsData()
  {
    
    this.service.getEmpDashboardIndicators().subscribe((data:any)=>{
      this.indicatorsData = data
    })
  }

  loadCustomeListData()
  {
    this.service.getCustomerOnDashboard().subscribe(data=>{
      this.customerList = data
    })
  }


  loadGraphData()
  {
    this.service.getGraphDataAdmin().subscribe((data : any)=>{
      const d = data['graphData'].map(data=>data.val)
      const e = data['graphData'].map(data=>data.date)
      this.generateChart(d,e)
      this.generateLineChart(d,e)
      this.generateDoughnutChart(d,e)
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

  generateLineChart(data :any , date : any)
  {
    this.pieChart = new Chart('pChart',{
        type: 'line',
        data: {
        labels: date,
        datasets: [{
            label: '# of Votes',
            data: data,
            borderColor:'#9d03fc'
        }]
    },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
      }
    }
  },
    })
  }



  generateDoughnutChart(data :any , date : any)
  {
    this.doughChart = new Chart('dNutChart',{
        type: 'doughnut',
        data: {
        labels: date,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor:'#9d03fc'
        }]
    },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        position:'right'
      },
      title: {
        display: true,
      }
    }
  },
    })
  }

}
