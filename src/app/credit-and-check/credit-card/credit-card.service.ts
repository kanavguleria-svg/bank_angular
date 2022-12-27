import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from 'src/app/models/CreditCard';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private basePath = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  createCreditCard(customer_id:number,creditcard:CreditCard)
  {
    return this.http.post(`${this.basePath}/customer/${customer_id}/creditcard/request`,creditcard,{responseType:'text'});
  }

  getCreditCard()
  {
    return this.http.get(`${this.basePath}/admin/credit_cards/requests`,{responseType:'text'});
  }

  removeCreditCard(id:number)
  {
    return this.http.delete(`${this.basePath}/customer/credit_card/${id}/remove`,{responseType:'text'});
  }
}
