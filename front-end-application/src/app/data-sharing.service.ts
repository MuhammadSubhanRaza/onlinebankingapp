import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  data : any

  isUpdate = false
  updateflag : boolean
  insertFlag : boolean

//------- CUSTOMER LOGIN INFO

  isCustomer : any

  getCustomerStatus()
  {
    return this.isCustomer
  }

  loggedInUser : any

  setData(val:any)
  {
    this.data = val
  }

  getData()
  {
    return this.data
  }

}
