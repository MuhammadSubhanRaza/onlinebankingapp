import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-branch',
  templateUrl: './detail-branch.component.html',
  styleUrls: ['./detail-branch.component.css']
})
export class DetailBranchComponent implements OnInit {

  branch : any
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { 
    this.branch = data
  }

  ngOnInit(): void {
  }

}
