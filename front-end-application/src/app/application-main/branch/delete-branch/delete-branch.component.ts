import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-branch',
  templateUrl: './delete-branch.component.html',
  styleUrls: ['./delete-branch.component.css']
})
export class DeleteBranchComponent implements OnInit {

  branch : any
  constructor(
     @Inject(MAT_DIALOG_DATA) public data:any,
    private service:SharedService
  ) { 

    this.branch = data
  }

  ngOnInit(): void {
  }


  onSubmit()
  {
    this.service.deleteBranch(this.data).subscribe(data=>{
      this.service.changeState()
    })
  }

}
