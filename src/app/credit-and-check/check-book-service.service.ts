import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckBook } from '../models/checkBook';

@Injectable({
  providedIn: 'root'
})
export class CheckBookServiceService {

  private basePath = 'http://localhost:8091';

  constructor(private http: HttpClient) { }

  createCheckBook(customer_id:number,checkbook:CheckBook)
  {
    return this.http.post(`${this.basePath}/customer/${customer_id}/checkbook/request`,checkbook,{responseType:'text',withCredentials:true});
  }

  getCheckBooks()
  {
    return this.http.get<any>(`${this.basePath}/admin/check_books/requests`,{withCredentials:true});
  }

  // removeCreditCard(id:number)
  // {
  //   return this.http.delete(`${this.basePath}/customer/credit_card/${id}/remove`,{responseType:'text'});
  // }

}
