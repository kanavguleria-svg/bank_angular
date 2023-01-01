import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutServiceService {

  private baseurl = environment.rooturl;

  constructor(private http: HttpClient) {}

  logout(usern: string, passw: string): Observable<any> {
    return this.http.post(`${this.baseurl}/logout`,"", {withCredentials: true});
  }
}
