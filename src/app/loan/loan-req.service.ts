import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoanReq } from './loan-req';
import { LoanAccount } from './loanacc';

@Injectable({
  providedIn: 'root'
})
export class LoanReqService {

  private basepath = environment.rooturl;

  constructor(private http: HttpClient) { }

  loanRequest(loanreq: LoanReq, customer_id: number): Observable<any> {
    return this.http.post(`${this.basepath}/customer/${customer_id}/loan/request`, loanreq, {responseType: 'text'});
  }
  getCustomerAccno(customer_id: number): Observable<LoanAccount>{
    return this.http.get<LoanAccount>(`${this.basepath}/customer/${customer_id}/account-details`);
  }
}
