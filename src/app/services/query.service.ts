import { Injectable } from '@angular/core';
import { ContactQuery } from '../models/contactquery.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}
  postContactQuery(query: ContactQuery): Observable<any> {
    console.log(query);
    return this.http.post(environment.rooturl + '/contactquery', query);
  }
}
