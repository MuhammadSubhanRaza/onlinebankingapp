import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-print-trans',
  templateUrl: './print-trans.component.html',
  styleUrls: ['./print-trans.component.css']
})
export class PrintTransComponent implements OnInit {

  dataSource : any
  custTransactionData : any
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  displayedColumns: string[] = [ 'tranAccountNoReciever','tranDate',
  'tranAmountTransferred','tranRecieverName','tranDescription'];

  constructor(private service:SharedService) { 
    this.getCustTransactions()
  }

  ngOnInit(): void {
  }

  getCustTransactions()
  {
    const accNo = sessionStorage.getItem("accNo")
    this.service.getCustomerTransactions(accNo).subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.custTransactionData = data[0]
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    })
  }

}
