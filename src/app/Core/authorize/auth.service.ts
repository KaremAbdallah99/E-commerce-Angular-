import { Token } from './../../_model/mytoken';
import { HttpClient } from '@angular/common/http';
import { Login } from './../../_model/login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userData: Login) {
    this.http.post<Token>('https://localhost:44396/api/auth/login', userData).subscribe(
      (tokenModel) => {
        localStorage.setItem('token', tokenModel.token);
      }
    )
  }
}
