import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  data : any

  isUpdate : boolean
  updateflag : boolean
  insertFlag : boolean

  setData(val:any)
  {
    this.data = val
  }

  getData()
  {
    return this.data
  }

}
