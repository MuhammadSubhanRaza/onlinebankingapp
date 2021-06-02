import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addedit-branch',
  templateUrl: './addedit-branch.component.html',
  styleUrls: ['./addedit-branch.component.css']
})
export class AddeditBranchComponent implements OnInit {
  branchForm : FormGroup
  citiesData : any
  selectedCity : string
  isUpdate: boolean

  branchId : number
  branchName : string
  branchAddress : string
  branchCityId: number

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private service: SharedService,private form : FormBuilder) {
    this.loadCitiesList()
    if(this.data==null)
    {
      this.initializeControlsToAdd()
    }
    else{
      this.initializeControlsToUpdate(data)
    }
   }

  ngOnInit(): void {
    this.branchForm = this.form.group({
      txtbranName : ['',Validators.required],
      txtbranAddress:['',Validators.required],
      ddbranCityId:['',Validators.required]  
    })
  }

  initializeControlsToAdd()
  {
    this.branchId = 0
    this.branchName = ''
    this.branchAddress = ''
    this.branchCityId = 0
  }

  initializeControlsToUpdate(val : any)
  {
    this.branchId = val.branId
    this.branchName = val.branName
    this.branchAddress = val.branAddress
    this.branchCityId = val.branchCityId
    this.isUpdate = true
  }

  

  loadCitiesList(){
    this.service.fetchCitiesList().subscribe(data=>{
      this.citiesData = data
    })
  }

  onSubmit() : void
  {
    var val = {branId:this.branchId,
              branName:this.branchForm.controls['txtbranName'].value,
              branAddress:this.branchForm.controls['txtbranAddress'].value,
              branchCityId:this.branchForm.controls['ddbranCityId'].value
            }
    if(this.isUpdate)
    {
      this.service.updateBranch(val).subscribe(data=>{
        this.service.changeModifiedState()
      })
      this.isUpdate = false
    }
    else
    {
      this.service.addBranch(val).subscribe(data=>{
        this.service.changeState()
      })
    }
  }

}
