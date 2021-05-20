import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:50991/api/departments"

  fetchDepartments():Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl);
  }

  addDepartment(val : any)
  {
    console.log(val)
    return this.http.post(this.apiUrl,val)
  }

  deleteDepartment(val:any){
    return this.http.delete(this.apiUrl+"/"+val.deptId,val.deptId)
  }

  updateDepartment(val:any)
  {
    return this.http.put(this.apiUrl+"/"+val.deptId,val)
  }



  
  crudState :boolean = false ;
  modifiedState = false
  
  changeState()
  {
    this.crudState = true
  }
  changeStateToFalse()
  {
    this.crudState = false
  }

  changeModifiedState()
  {
    this.modifiedState = true
  }
  changeModifiedStateToFalse(){
    this.modifiedState = false
  }





}
