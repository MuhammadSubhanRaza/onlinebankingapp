import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddEditDeptComponent } from './../add-edit-dept/add-edit-dept.component'
import { SharedService } from './../../shared.service'
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar'
import { DeleteDeptComponent } from '../delete-dept/delete-dept.component';
import { DeptDetailsComponent } from '../dept-details/dept-details.component';


@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  dataSource:any 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private dialog : MatDialog,private service : SharedService,private snackbar:MatSnackBar) {
    
   }


   loadDepartmentList()
   {
     this.service.fetchDepartments().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    })
   }


  ngOnInit(): void {
    this.loadDepartmentList();
  }
  
  ngAfterViewInit() {
    
  }

  displayedColumns: string[] = ['deptId', 'deptName','action'];


  state : any

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(AddEditDeptComponent, dialogConfig);
     dialogRef.afterClosed().subscribe(data=>{
        this.loadDepartmentList()
        if(this.service.crudState){
          this.snackbar.open("Department Added Successfully!","Okay",{duration:3000})
        }
        this.service.changeStateToFalse()
        this.service.changeModifiedStateToFalse()
     }
    );    
  }


  filterTable(val:string)
  {
    this.dataSource.filter = val.trim().toLowerCase(); 
  }

  updateRecord(val:any){
    const dialogRef = this.dialog.open(AddEditDeptComponent,{data:val})
    dialogRef.afterClosed().subscribe(data=>{
        this.loadDepartmentList()
        if(this.service.modifiedState){
          this.snackbar.open("Data Modified Successfully!","Okay",{duration:3000})
        }
        this.service.changeModifiedStateToFalse()
     }
    );    
  }

  deleteRecord(val:any){
    const dialogRef = this.dialog.open(DeleteDeptComponent,{data:val})
    dialogRef.afterClosed().subscribe(data=>{
        this.loadDepartmentList()
        if(this.service.crudState){
          this.snackbar.open("Data Deleted Successfully!","Okay",{duration:3000})
        }
        this.service.changeStateToFalse()
     }
    );   
  }


  detailRecord(val:any)
  {
    this.dialog.open(DeptDetailsComponent,{data:val})
  }


  
}



