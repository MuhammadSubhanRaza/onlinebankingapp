import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  leftChart : any = []
  pieChart : any = []

  constructor() { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.generateChart()
    this.generatePie()
  }



  generateChart()
  {
    var delayed;
    this.leftChart = new Chart('canvas',{
       type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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

  generatePie()
  {
    this.pieChart = new Chart('pChart',{
        type: 'line',
        data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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

}
