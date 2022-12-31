import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionDetails } from './trxn';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrxnPayee } from './payee';
import { Account_details} from 'src/app/models/user';



@Injectable({
  providedIn: 'root'
})
export class TrxnService {

  private basePath = environment.rooturl;

  constructor(private http: HttpClient) { }

  maketrxn(trxnDetails: TransactionDetails, customer_id: number): Observable<any> {
    return this.http.post(`${this.basePath}/customer/${customer_id}/payment`,trxnDetails, {responseType: 'text', withCredentials: true});
  }

  getAlltrxn(customer_id: number): Observable<TransactionDetails[]> {
    return this.http.get<TransactionDetails[]>(`${this.basePath}/customer/${customer_id}/transaction`, {withCredentials: true});
  }

  getPayee(customer_id: number): Observable<TrxnPayee[]> {
    return this.http.get<TrxnPayee[]>(`${this.basePath}/customer/${customer_id}/payee`, {withCredentials: true});
  }

  getAccount(customer_id: number): Observable<Account_details> {
    return this.http.get<Account_details>(`${this.basePath}/customer/${customer_id}/account-details`, {withCredentials: true})
  }

}
