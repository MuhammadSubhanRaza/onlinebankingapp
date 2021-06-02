import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { nextTick } from 'process';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-trans',
  templateUrl: './view-trans.component.html',
  styleUrls: ['./view-trans.component.css']
})
export class ViewTransComponent implements OnInit {

  allCustTransactions : any

  constructor(private service : SharedService,private snackBar : MatSnackBar) { 
    this.getCustTransactions()
  }

  ngOnInit(): void {
  }


  getCustTransactions()
  {
    const accNo = sessionStorage.getItem("accNo")
    this.service.getCustomerTransactions(accNo).subscribe(data=>{
      this.allCustTransactions = data
    })
  }
}
