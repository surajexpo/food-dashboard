import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthtokenService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('key');
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: 'bearer ' + token,
      },
    });
    return next.handle(jwttoken);
  }
}
function key(key: any) {
  throw new Error('Function not implemented.');
}

