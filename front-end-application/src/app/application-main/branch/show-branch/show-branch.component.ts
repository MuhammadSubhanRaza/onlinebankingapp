import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddeditBranchComponent } from './../addedit-branch/addedit-branch.component'
import { SharedService } from 'src/app/shared.service';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteBranchComponent } from '../delete-branch/delete-branch.component';
import { DetailBranchComponent } from '../detail-branch/detail-branch.component';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  displayedColumns: string[] = ['branId', 'branName', 'branAddress','branchCity','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  dataSource:any

  constructor(private dialog : MatDialog,private service : SharedService,private snackBar : MatSnackBar) {
   this.loadDataTable()
   }

  ngOnInit(): void {
  }

  loadDataTable(){
     this.service.fetchBranches().subscribe(data=>{console.log("we got"+data)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort
      this.dataSource.paginator=this.paginator
    })
  }

  filterTable(val:string){
    this.dataSource.filter = val.trim().toLowerCase(); 
  }



 



  openDialog(){
    const dialorRef = this.dialog.open(AddeditBranchComponent)
    dialorRef.afterClosed().subscribe(param=>{
      this.loadDataTable()
      if(this.service.crudState){
        this.snackBar.open("new Branch Added Successfully!","Okay",{duration:3000})
      }
      this.service.changeStateToFalse()
      this.service.changeModifiedStateToFalse()
    })
  }

  detailRecord(val:any)
  {
    this.dialog.open(DetailBranchComponent,{data:val})
  }
  updateRecord(val:any)
  {
     const dialorRef = this.dialog.open(AddeditBranchComponent,{data:val})
    dialorRef.afterClosed().subscribe(param=>{
      this.loadDataTable()
      if(this.service.modifiedState){
        this.snackBar.open("Branch Record Modified Successfully!","Okay",{duration:3000})
      }
      this.service.changeStateToFalse()
      this.service.changeModifiedStateToFalse()
    })
  }
  
  deleteRecord(val:any)
  {
    const dialogRef = this.dialog.open(DeleteBranchComponent,{data:val})
    dialogRef.afterClosed().subscribe(data=>{
        this.loadDataTable()
        if(this.service.crudState){
          this.snackBar.open("Data Deleted Successfully!","Okay",{duration:3000})
        }
        this.service.changeStateToFalse()
     }
    );   
  }

}




