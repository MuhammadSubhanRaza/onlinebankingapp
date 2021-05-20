import { Component, OnInit,AfterViewInit,ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddEditDeptComponent } from './../add-edit-dept/add-edit-dept.component'
import { SharedService } from './../../shared.service'
import { MatSort } from '@angular/material/sort';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements AfterViewInit,OnInit {

  dataSource:any = []

  constructor(private dialog : MatDialog,private service : SharedService,private snackbar:MatSnackBar) {
    
    this.loadDepartmentList();
   }

     status : boolean

   loadDepartmentList()
   {
     this.service.fetchDepartments().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
    })
   }


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   
  }

  displayedColumns: string[] = ['deptId', 'deptName','action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    
  }

  state : any

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(AddEditDeptComponent, dialogConfig);
     dialogRef.afterClosed().subscribe(data=>{
        this.loadDepartmentList()
        if(this.service.crudState){
          this.snackbar.open("Data saved scuccessfully!","Okay",{duration:3000})
        }
     }
    );    
  }


  filterTable(val:string)
  {
    this.dataSource.filter = val.trim().toLowerCase(); 
  }

  updateRecord(data:any){
    alert(data.deptName)
  }

  deleteRecord(data:any){
    alert(data.deptId)
  }

  
}

export interface PeriodicElement {
  deptId: number;
  deptName : string;
}


