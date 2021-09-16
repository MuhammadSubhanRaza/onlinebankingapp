import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private http: HttpClient,
    private dataService: DataSharingService,
    private jwtHelper: JwtHelperService
  ) {}

  readonly photoURL = 'http://localhost:50991/photos/';

  //--------------- APPLICATION COMMONS ---------------

  crudState: boolean = false;
  modifiedState = false;

  changeState() {
    this.crudState = true;
  }
  changeStateToFalse() {
    this.crudState = false;
  }

  changeModifiedState() {
    this.modifiedState = true;
  }
  changeModifiedStateToFalse() {
    this.modifiedState = false;
  }

  apiUrl = 'http://localhost:50991/api/';

  //---------------------------- DEPARTMENTS -----------------------

  fetchDepartments(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'departments');
  }

  addDepartment(val: any) {
    return this.http.post(this.apiUrl + 'departments', val);
  }

  deleteDepartment(val: any) {
    return this.http.delete(
      this.apiUrl + 'departments/' + val.deptId,
      val.deptId
    );
  }

  updateDepartment(val: any) {
    return this.http.put(this.apiUrl + 'departments/' + val.deptId, val);
  }

  detailDepartment(val: any) {
    return this.http.get(this.apiUrl + 'departments/' + val.deptId, val.deptId);
  }

  //------------------- BRANCHES -----------------------

  fetchBranches(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'branches');
  }

  fetchCitiesList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'cities');
  }

  addBranch(val: any) {
    return this.http.post(this.apiUrl + 'branches', val);
  }

  updateBranch(val: any) {
    return this.http.put(this.apiUrl + 'branches/' + val.branId, val);
  }

  deleteBranch(val: any) {
    return this.http.delete(this.apiUrl + 'branches/' + val.branId);
  }

  detailBranch(val: any) {
    return this.http.get(this.apiUrl + 'branches/' + val.branId);
  }

  // -------------------------- EMPLOYEES -----------------

  fetchEmployees(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'employees');
  }

  addEmployee(val: any) {
    return this.http.post(this.apiUrl + 'employees', val);
  }

  uploadPhoto(val: any) {
    return this.http.post(this.apiUrl + 'employees/savefile', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.apiUrl + 'employees/' + val.empId);
  }

  updateEmployee(val: any) {
    return this.http.put(this.apiUrl + 'employees/' + val.empId, val);
  }

  detailEmployee(val: any) {
    return this.http.get(this.apiUrl + 'employees/' + val);
  }

  // ------------------------------- CUSTOMER -----------------------

  fetchCutomers(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'customers');
  }

  addCustomer(val: any) {
    return this.http.post(this.apiUrl + 'customers', val);
  }

  uploadCustomerPhoto(val: any) {
    return this.http.post(this.apiUrl + 'customers/savefile', val);
  }

  deleteCustomer(val: any) {
    return this.http.delete(this.apiUrl + 'customers/' + val.custId);
  }

  updateCustomer(val: any) {
    return this.http.put(this.apiUrl + 'customers/' + val.custId, val);
  }

  detailCustomer(val: any) {
    return this.http.get(this.apiUrl + 'customers/' + val);
  }

  //------------------------------ ACCOUNTS -------------------------

  getCustomerForAccountCreation(val: any) {
    return this.http.get(this.apiUrl + 'customers/' + val);
  }

  addAccount(val: any) {
    return this.http.post(this.apiUrl + 'accounts', val);
  }

  getLastRecord() {
    return this.http.get(this.apiUrl + 'customers/getlastchild');
  }

  fetchAccounts(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'accounts');
  }

  getLastAccountAdded() {
    return this.http.get(this.apiUrl + 'accounts/getlastchild');
  }

  deleteAccount(val: any) {
    return this.http.delete(this.apiUrl + 'accounts/' + val.accId);
  }

  updateAccount(val: any) {
    return this.http.put(this.apiUrl + 'accounts/' + val.accId, val);
  }

  //-------------------------------------- ADMIN LOGIN -------------------

  getLoginCredentials(username: any, password: string) {
    var emp = { empUserName: username, empPassword: password };
    return this.http.post(this.apiUrl + 'auth/login', emp);
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('empjwt');
    sessionStorage.removeItem('isCustomer');
    sessionStorage.removeItem('userId');
  }

  //--------------------------- CSUTOMER LOGIN -------------------

  getCustomerLoginCredentials(val: any) {
    return this.http.post(this.apiUrl + 'auth/customerlogin', val);
  }

  isCustomerAuthenticated() {
    const token: string = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  Customerlogout() {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('isCustomer');
  }

  //---------------------------- NOTIFICATION -------------------------

  addNotification(val: any) {
    return this.http.post(this.apiUrl + 'notifiacations', val);
  }

  fetchUnreadNotifications() {
    return this.http.get(this.apiUrl + 'notifiacations');
  }

  markNotificationAsRead(val: any) {
    return this.http.put(this.apiUrl + 'notifiacations/' + val.notId, val);
  }

  //------------------------- TRANSACTION -------------

  authenticateAccountBeforeTransaction(val: any) {
    console.log(val);
    return this.http.post(this.apiUrl + 'auth/authenticatecustomer', val);
  }

  makeTransaction(val: any) {
    return this.http.post(this.apiUrl + 'transactions', val);
  }

  getCustomerTransactions(val: any) {
    var custAcc = { accAccountCode: val };
    return this.http.post(
      this.apiUrl + 'transactions/getcustomertransactions',
      custAcc
    );
  }

  //-------------------------- ADMIN DASHBOARD ------------------

  getGraphDataAdmin() {
    return this.http.get(this.apiUrl + 'empdashboard/getbargraphdata');
  }

  getCustomerOnDashboard() {
    return this.http.get(this.apiUrl + 'empdashboard/getcustomers');
  }

  getEmpDashboardIndicators() {
    return this.http.get(this.apiUrl + 'empdashboard/getindicators');
  }

  getNumberOfRequests() {
    return this.http.get(
      this.apiUrl + 'empdashboard/getrequestnotificationnumbers'
    );
  }

  fetchComplaintsCounter() {
    return this.http.get(this.apiUrl + 'empdashboard/getcomplaintscounter');
  }

  //-------------------------- CUSTOMER SETTINGS ---------------------

  getAccountDetailsFromAccountNo(val: any) {
    return this.http.post(
      this.apiUrl + 'accounts/getaccountfromaccountno',
      val
    );
  }

  getGraphDataOnCustSettings(val: any) {
    return this.http.post(this.apiUrl + 'accounts/getbargraphdata', val);
  }

  //--------------------------- LOAN APPLICATION POST ----------------

  addLoanApplication(val: any) {
    return this.http.post(this.apiUrl + 'loanapplications', val);
  }

  getAllComplaints() {
    return this.http.get(
      this.apiUrl + 'loanapplications/getunreadapplications'
    );
  }

  getAccountDetailsThroughCustId(val: any) {
    return this.http.post(this.apiUrl + 'accounts/getdatathroughcustid', val);
  }

  onLoanApprove(val: any) {
    return this.http.put(
      this.apiUrl + 'loanapplications/' + val.loanAppId,
      val
    );
  }

  onLoanReject(val: any) {
    return this.http.delete(this.apiUrl + 'loanapplications/' + val.loanAppId);
  }

  //--------------------------- COMPLAINS -------------------------

  addComplain(val: any) {
    return this.http.post(this.apiUrl + 'complaints', val);
  }

  fetchUnreadComplaints() {
    return this.http.get(this.apiUrl + 'complaints');
  }

  markAsReadUnreadComplaints(val: any) {
    return this.http.put(this.apiUrl + 'complaints/' + val.compId, val);
  }

  //--------------------------- GIVE LOAN ---------------------

  addGiveLoan(val: any) {
    return this.http.post(this.apiUrl + 'loans', val);
  }

  //---------------------------- CUST DASHBOARD--------------------

  fetchCurrentTransactionsForCustDashboard(val: any) {
    return this.http.post(
      this.apiUrl + 'custdashboard/getcurrenttransactions',
      val
    );
  }

  fetchCustomerDetailsOnCustDasshboard(val: any) {
    return this.http.get(this.apiUrl + 'customers/' + val);
  }

  fetchAllCounterForCustDashboard(val: any) {
    return this.http.post(
      this.apiUrl + 'custdashboard/getcustomersidenavcounters',
      val
    );
  }
}
