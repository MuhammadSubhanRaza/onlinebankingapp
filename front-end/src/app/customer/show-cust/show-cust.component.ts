import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { SharedService } from 'src/app/shared.service';
import { DeleteCustComponent } from '../delete-cust/delete-cust.component';
import { DetailCustComponent } from '../detail-cust/detail-cust.component';

@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {

  displayedColumns: string[] = ['custId', 'custImagePath', 'custName','custGender', 'custContact','custEmail','custAddress','action'];
  dataSource :any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort
  imagePath : any

  constructor(private router : Router ,private dataService:DataSharingService ,private snackBar : MatSnackBar ,private dialog:MatDialog,private service:SharedService) 
  { 
    this.loadCustomers()
    if(dataService.updateflag)
    {
      this.snackBar.open("Customer Record Modified Successfully!","Okay",{duration:3000})
      dataService.updateflag = false;
      dataService.data = null
    }
    if(dataService.insertFlag)
    {
      this.snackBar.open("New Customer Added Successfully!","Okay",{duration:3000})
      dataService.insertFlag = false;
      dataService.data = null
    }
  }

  ngOnInit(): void {
  }





  
  loadCustomers()
  {
    this.service.fetchCutomers().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
      this.imagePath = this.service.photoURL
    })
  }

  filterTable(val : any){
    this.dataSource.filter = val.trim().toLowerCase();
  }
  

  detailRecord(val : any)
  {
    this.dialog.open(DetailCustComponent,{data:val})
  }

  updateRecord(val : any)
  {
    this.dataService.setData(val)
    this.dataService.isUpdate = true
    this.router.navigate(['customers/addedit'])
  }

  deleteRecord(val : any)
  {
    const dialoRef = this.dialog.open(DeleteCustComponent,{data:val})
    dialoRef.afterClosed().subscribe(result=>{
      if(this.service.crudState)
      {
        this.snackBar.open("Customer Deleted Successfully!","Okay",{duration:3000})
        this.loadCustomers()
        this.service.changeStateToFalse()
      }
    })
  }


}

