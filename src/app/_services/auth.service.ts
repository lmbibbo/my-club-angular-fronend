import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    
    let cuerpo = `{"username":"${username}", "password":"${password}"}`;
    return this.http.post(AUTH_API + '/api/auth/login', cuerpo, {responseType: "text",
       observe: 'body'}).pipe(
      tap((res: any) => {
        console.log(res);
        localStorage.setItem('token-auth',res);
      },(err)=> {
        console.log(err);
      })
    );
  } 
  
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {});
  }
}
