import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { SharedService } from 'src/app/shared.service';
import { DeleteEmpComponent } from '../delete-emp/delete-emp.component';
import { DetailsEmpComponent } from '../details-emp/details-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  displayedColumns: string[] = ['empId','empImage', 'empFirstName', 'empGender','empContact','empEmail','empDepartment','action'];
  dataSource : any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort
  imagePath : any

  constructor(private router : Router ,private dataService:DataSharingService ,private snackBar : MatSnackBar ,private dialog:MatDialog,private service:SharedService) { 
    this.loadEmployees()
    this.imagePath = this.service.photoURL
    if(this.dataService.updateflag)
    {
      this.snackBar.open("Employee Data Modified Successfully!","Okay",{duration:3000})
      this.dataService.updateflag = false
    }
  }

  ngOnInit(): void {
  }

  loadEmployees()
  {
    this.service.fetchEmployees().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    })
  }

  filterTable(val : any){
    this.dataSource.filter = val.trim().toLowerCase();
  }
  

  detailRecord(val : any)
  {
    this.dialog.open(DetailsEmpComponent,{data:val})
  }

  updateRecord(val : any)
  {
    this.dataService.setData(val)
    this.dataService.isUpdate = true
    this.router.navigate(['employees/addedit'])
  }

  deleteRecord(val : any)
  {
    const dialoRef = this.dialog.open(DeleteEmpComponent,{data:val})
    dialoRef.afterClosed().subscribe(result=>{
      if(this.service.crudState)
      {
        this.snackBar.open("Employee Deleted Successfully!","Okay",{duration:3000})
        this.loadEmployees()
        this.service.changeStateToFalse()
      }
    })
  }


}



