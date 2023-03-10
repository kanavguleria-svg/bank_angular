import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreditCard } from '../models/CreditCard';
import { CheckBook } from '../models/checkBook';
import { LoanReq } from '../loan/loan-req';
import { UserOffers } from '../models/useroffer.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getCreditReq(id: number) {
    return this.http.get<CreditCard>(
      environment.rooturl + `/customer/${id}/creditcard`,
      { withCredentials: true }
    );
  }

  getLoanReq(id: number) {
    return this.http.get<LoanReq>(
      environment.rooturl + `/customer/${id}/loan/request`,
      { withCredentials: true }
    );
  }

  getCheckReq(id: number) {
    return this.http.get<CheckBook>(
      environment.rooturl + `/customer/${id}/checkbook`,
      { withCredentials: true }
    );
  }

  getUserOffers(id: number) {
    return this.http.get<UserOffers[]>(
      environment.rooturl + `/customer/${id}/offers`,
      { withCredentials: true }
    );
  }
}
