import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  readonly photoURL = "http://localhost:50991/photos/";

  //--------------- APPLICATION COMMONS ---------------
  
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

  apiUrl = "http://localhost:50991/api/"


  //---------------------------- DEPARTMENTS -----------------------

  fetchDepartments():Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl+"departments");
  }

  addDepartment(val : any)
  {
    return this.http.post(this.apiUrl+"departments",val)
  }

  deleteDepartment(val:any){
    return this.http.delete(this.apiUrl+"departments/"+val.deptId,val.deptId)
  }

  updateDepartment(val:any)
  {
    return this.http.put(this.apiUrl+"departments/"+val.deptId,val)
  }

  detailDepartment(val:any)
  {
    return this.http.get(this.apiUrl+"departments/"+val.deptId,val.deptId)
  }


  //------------------- BRANCHES -----------------------

  fetchBranches():Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl+"branches")
  }

  fetchCitiesList():Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl+"cities")
  }

  addBranch(val:any){
    return this.http.post(this.apiUrl+"branches",val)
  }

  updateBranch(val:any)
  {
    return this.http.put(this.apiUrl+"branches/"+val.branId,val)
  }

  deleteBranch(val : any)
  {
    return this.http.delete(this.apiUrl+"branches/"+val.branId)
  }

  detailBranch(val : any)
  {
    return this.http.get(this.apiUrl+"branches/"+val.branId)
  }


  // -------------------------- EMPLOYEES -----------------


  fetchEmployees():Observable<any[]>{
    return this.http.get<any>(this.apiUrl+"employees")
  }

  addEmployee(val : any)
  {
    return this.http.post(this.apiUrl+"employees",val)
  }

  uploadPhoto(val : any){
    return this.http.post(this.apiUrl+"employees/savefile",val)
  }

  deleteEmployee(val: any)
  {
    return this.http.delete(this.apiUrl+"employees/"+val.empId)
  }

  updateEmployee(val:any)
  {
    return this.http.put(this.apiUrl+"employees/"+val.empId,val)
  }


  // ------------------------------- CUSTOMER -----------------------


  
  fetchCutomers():Observable<any[]>{
    return this.http.get<any>(this.apiUrl+"customers")
  }

  addCustomer(val : any)
  {
    return this.http.post(this.apiUrl+"customers",val)
  }

  uploadCustomerPhoto(val : any){
    return this.http.post(this.apiUrl+"customers/savefile",val)
  }

  deleteCustomer(val: any)
  {
    return this.http.delete(this.apiUrl+"customers/"+val.custId)
  }

  updateCustomer(val:any)
  {
    return this.http.put(this.apiUrl+"customers/"+val.custId,val)
  }



}
