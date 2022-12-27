import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionDetails } from './trxn';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrxnService {

  private basePath = environment.rooturl;

  constructor(private http: HttpClient) { }

  maketrxn(trxnDetails: TransactionDetails, customer_id: number): Observable<any> {
    return this.http.post(`${this.basePath}/customer/${customer_id}/payment`,trxnDetails, {responseType: 'text'});
  }

  getAlltrxn(customer_id: number): Observable<TransactionDetails[]> {
    return this.http.get<TransactionDetails[]>(`${this.basePath}/customer/${customer_id}/transaction`)
  }

}
