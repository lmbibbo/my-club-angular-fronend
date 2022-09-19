import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

const AUTH_API = 'http://192.168.0.21:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    let cuerpo = JSON.parse('{"username":"linda", "password":"password"}')
    console.log(AUTH_API + 'login');
    return this.http.post(AUTH_API + 'login', cuerpo, httpOptions).pipe(
      map((data: Response) => {
        console.log(data);
        return data;
      }
    ));
  }
  
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
