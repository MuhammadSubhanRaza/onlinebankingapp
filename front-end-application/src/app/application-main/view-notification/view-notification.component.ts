import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})
export class ViewNotificationComponent implements OnInit {

  allUnreadNotifications : any = []

  constructor(private service : SharedService) { 
    this.getAllunreadNotifications()
  }

  ngOnInit(): void {
  }


  getAllunreadNotifications()
  {
    this.service.fetchUnreadNotifications().subscribe(data=>{
      this.allUnreadNotifications = data
    })
  }

  onRead( val : any )
  {
    val.notHasRead = true
    this.service.markNotificationAsRead(val).subscribe(data=>{
      window.location.reload()
    })
  }

}
