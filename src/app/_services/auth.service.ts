import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
  .set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With')
 };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private http: HttpClient, private storageService: StorageService) {}

  login(username: string, password: string) {
    
    let cuerpo = `{"username":"${username}", "password":"${password}"}`;
    return this.http.post(AUTH_API + '/api/auth/login', cuerpo, {responseType: "text",
       observe: 'body'}).pipe(
      tap((res: any) => {
        console.log(res);
        //localStorage.setItem('token-auth',response.token);
      },(err)=> {
        console.log(err);
      })
    );
  } 
  
  /*
  
  Observable<any> {
    //let cuerpo = `{"username":"linda", "password":"password"}`;
    let cuerpo = `{"username":"${username}", "password":"${password}"}`;
    return this.http.post(AUTH_API + '/api/auth/login', cuerpo);
  }*/
  
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
