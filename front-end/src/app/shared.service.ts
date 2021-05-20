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
    return this.http.post(this.apiUrl,val)
  }


  
  crudState :boolean = false ;

  
  changeState()
  {
    this.crudState = true
  }





}
