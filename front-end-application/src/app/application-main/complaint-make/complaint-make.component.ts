import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-complaint-make',
  templateUrl: './complaint-make.component.html',
  styleUrls: ['./complaint-make.component.css']
})
export class ComplaintMakeComponent implements OnInit {
  complainBody: any
  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    var custId = parseInt(sessionStorage.getItem('userId'))
      var val = {
        compId : 0,compCustId : custId,compDate:this.getCurrentDate()
        ,compMatter:this.complainBody
        ,compStatus:false
      }

      this.service.addComplain(val).subscribe(data=>{
        this.router.navigate(['onlinebanking/customerdashboard'])
        sessionStorage.setItem('complainSent','true')
      })
  }

   getCurrentDate()
   {
     var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      return yyyy+"/"+mm+"/"+dd
   }

}
