import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionDetails } from './trxn';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrxnService {

  private basePath = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  maketrxn(trxnDetails: TransactionDetails, customer_id: number): Observable<any> {
    return this.http.post(`${this.basePath}/customer/${customer_id}/payment`,trxnDetails, {responseType: 'text'});
  }

}
