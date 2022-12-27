import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account_details, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basePath = 'http://localhost:8091';


  getcustomerId():Observable<any>{
    return this.http.get<number>(`${this.basePath}/user`);
  }


  updateUser(customerId:number,user:User): Observable<any> {
    return this.http.patch(`${this.basePath}/customer/${customerId}/details/update`, user, {responseType: 'text'});
  }
  

  saveUser(user:User):Observable<any> {
    return this.http.post(`${this.basePath}/register`, user, {responseType: 'text'});
  }

  saveAccountDetails(account_details:Account_details,customerId:number):Observable<any>{
    return this.http.post(`${this.basePath}/register/customer/${customerId}/account-details`, account_details, {responseType: 'text'});
  }

  constructor(private http: HttpClient) { }


}
