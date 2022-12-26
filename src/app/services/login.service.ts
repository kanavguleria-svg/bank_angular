import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  validateLoginDetails(customer: Customer) {
    window.sessionStorage.setItem('userdetails', JSON.stringify(customer));
    return this.http.get(environment.rooturl + '/user', {
      observe: 'response',
      withCredentials: true,
    });
  }
}
