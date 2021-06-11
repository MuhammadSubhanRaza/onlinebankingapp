import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-complaint-view',
  templateUrl: './complaint-view.component.html',
  styleUrls: ['./complaint-view.component.css']
})
export class ComplaintViewComponent implements OnInit {

  allUnreadComplaints : any = []
  imageUrl = this.service.photoURL

  constructor(private service : SharedService,private snackbar : MatSnackBar) { 
    this.loadUnreadComplaints()
  }

  ngOnInit(): void {
  }


  loadUnreadComplaints()
  {
    this.service.fetchUnreadComplaints().subscribe(data=>{
      this.allUnreadComplaints = data
    })
  }

  onSolved(val : any)
  {
    val.compStatus = true
    this.service.markAsReadUnreadComplaints(val).subscribe(data=>{
      window.location.reload()
      this.snackbar.open("Complaint has been marked as SOLVED","Okay",{duration:3000})
    })
  }

}
