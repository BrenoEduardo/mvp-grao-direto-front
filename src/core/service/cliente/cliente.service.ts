import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public url = enviroment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCompanys(){
    return this.http.get(`${this.url}client/getAllCompanys`)
  }
  filterCompanies(filter: any){
    return this.http.post(`${this.url}client/filterCompanies`, filter)
  }
  editProfile(data: any){
    return this.http.put(`${this.url}client/editProfile`, data)
  }
}
