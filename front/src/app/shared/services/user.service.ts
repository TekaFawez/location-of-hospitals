import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:4000/api";

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user)
  }

  loginUser(user): Observable<any> {
    const url = `${this.apiUrl}/authenticatea`;
    return this.http.post<any>(url, user).pipe(map(data => {
       if (data) {
         return data
       }
     }));
   }
}
