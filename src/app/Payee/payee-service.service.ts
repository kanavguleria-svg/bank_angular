import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payee } from '../models/payee';

@Injectable({
  providedIn: 'root'
})
export class PayeeServiceService {
  private basePath = 'http://localhost:8091';

  savePayee(customerId:number,payee:Payee):Observable<any> {
    return this.http.post(`${this.basePath}/customer/${customerId}/payee`, payee, {responseType: 'text',withCredentials:true});
  }

  updatePayee(payeeId:number,payee:Payee): Observable<any> {
    return this.http.patch(`${this.basePath}/customer/payee/${payeeId}/update`, payee, {responseType: 'text',withCredentials:true});
  }

  deletePayee(payeeId:number):Observable<any>{
    return this.http.delete(`${this.basePath}/customer/payee/${payeeId}/delete`, {responseType: 'text',withCredentials:true});
  }

  getAllPayee(customerId:number):Observable<any>{
    return this.http.get<Payee[]>(`${this.basePath}/customer/${customerId}/payee`,{withCredentials:true});
  }

  constructor(private http: HttpClient) { }
}
