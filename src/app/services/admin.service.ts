import { Injectable } from '@angular/core';
import { UserOffers } from '../models/useroffer.model';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserContactQuery } from '../models/userquery.model';
import { ContactQuery } from '../models/contactquery.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<any> {
    return this.http.get<Customer[]>(environment.rooturl + '/admin/customers', {
      withCredentials: true,
    });
  }

  getUserQuery(): Observable<any> {
    return this.http.get<UserContactQuery[]>(
      environment.rooturl + '/admin/queries',
      { withCredentials: true }
    );
  }

  getContactQuery(): Observable<any> {
    return this.http.get<ContactQuery[]>(
      environment.rooturl + '/admin/contactqueries',
      { withCredentials: true }
    );
  }

  postUserOffers(offers: UserOffers, customerId: number): Observable<any> {
    return this.http.post(
      environment.rooturl + `/admin/customer/${customerId}/offers`,
      offers,
      {
        withCredentials: true,
      }
    );
  }
}
