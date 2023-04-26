import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post(GlobalBaseurl.BASE_API_URL + 'auth/login', body);
  }
}
