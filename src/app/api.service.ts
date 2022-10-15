import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const AUTH_API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  login(username: string, password: string): Observable<any> {
    //let cuerpo = `{"username":"linda", "password":"password"}`;
    let cuerpo = `{"username":"${username}", "password":"${password}"}`;
    return this.http.post(AUTH_API + '/api/auth/login', cuerpo);
  }
}
