import { Injectable } from '@angular/core';
import { UserOffers } from '../models/useroffer.model';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserContactQuery } from '../models/userquery.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<any> {
    return this.http.get<Customer[]>(environment.rooturl + '/admin/customers');
  }

  getUserQuery(): Observable<any> {
    return this.http.get<UserContactQuery[]>(
      environment.rooturl + '/admin/queries'
    );
  }

  postUserOffers(query: UserContactQuery, customerId: number): Observable<any> {
    return this.http.post(
      environment.rooturl + `/customer/${customerId}/query`,
      query
    );
  }
}
