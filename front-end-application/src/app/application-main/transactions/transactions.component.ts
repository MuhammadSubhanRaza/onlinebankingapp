import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private snackBar : MatSnackBar,private dataService:DataSharingService) { 
      
  }

  ngOnInit(): void {
    

          
  }

  

}
