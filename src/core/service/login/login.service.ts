import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = enviroment.apiUrl;
  constructor(private http: HttpClient) { }

  register(infoUser: any){
    return this.http.post(`${this.url}auth/register`,infoUser)
  }
  login(infoUser: any){
    return this.http.post(`${this.url}auth/authenticate`,infoUser)
  }
}
