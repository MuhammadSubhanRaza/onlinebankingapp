import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingService } from 'src/app/data-sharing.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { DetialAccComponent } from '../detial-acc/detial-acc.component';
import { DeleteAccComponent } from '../delete-acc/delete-acc.component';

@Component({
  selector: 'app-show-bankaccount',
  templateUrl: './show-bankaccount.component.html',
  styleUrls: ['./show-bankaccount.component.css']
})
export class ShowBankaccountComponent implements OnInit {

  
  displayedColumns: string[] = ['accStatus', 'accNo', 'accCustomerId', 'accType','accDateOfOpening','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort
  dataSource : any

  constructor(private router : Router ,private dataService:DataSharingService ,private snackBar : MatSnackBar ,private dialog:MatDialog,private service:SharedService) 
  {
    this.loadRecords()
    if(this.dataService.insertFlag){
      this.snackBar.open("New Record Added Successfuly","Okay",{duration:3000})
      this.dataService.insertFlag = false
    }
    if(this.dataService.updateflag){
      this.snackBar.open("A Record Modified Successfuly","Okay",{duration:3000})
      this.dataService.updateflag = false
      this.dataService.isUpdate = false
    }
  }

  ngOnInit(): void {
  }


  


  loadRecords()
  {
     this.service.fetchAccounts().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    })
  }

  detailRecord(val :any)
  {
    this.dialog.open(DetialAccComponent,{data:val})
  }

  updateRecord(val : any)
  {
    this.dataService.setData(val)
    this.dataService.isUpdate = true
    this.router.navigate(["bankaccount/addedit"])
  }

  deleteRecord(val : any)
  {
    const dialoRef = this.dialog.open(DeleteAccComponent,{data:val})
    dialoRef.afterClosed().subscribe(result=>{
      if(this.service.crudState)
      {
        this.snackBar.open("Account Deleted Successfully!","Okay",{duration:3000})
        this.loadRecords()
        this.service.changeStateToFalse()
      }
    })
  }


}



