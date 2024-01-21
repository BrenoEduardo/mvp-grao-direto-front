import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  register(infoUser: any){
    return this.http.post('http://localhost:3000/auth/register',infoUser)
  }
  login(infoUser: any){
    return this.http.post('http://localhost:3000/auth/authenticate',infoUser)
  }
}
