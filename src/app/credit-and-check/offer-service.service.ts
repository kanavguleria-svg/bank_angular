import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  private basePath = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  createOffer(offer:Offer)
  {
    return this.http.post(`${this.basePath}/admin/createoffers`,offer,{responseType:'text'});
  }


  getOffer()
  {
    return this.http.get<any>(`${this.basePath}/admin/offers`);
  }

  removeOffer(id:number)
  {
    return this.http.delete(`${this.basePath}/admin/offers/${id}/remove`,{responseType:'text'});
  }
}
