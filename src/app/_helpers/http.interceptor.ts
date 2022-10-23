import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private apiService:ApiService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
   // const token = this.apiService.getToken();
    let token = null;
    if(token != null){
        authReq = authReq.clone({
        setHeaders : {Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
    }
    return next.handle(authReq);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
