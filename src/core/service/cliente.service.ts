import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAllCompanys(){
    return this.http.get('http://localhost:3000/client/getAllCompanys')
  }
  filterCompanies(filter: any){
    return this.http.post('http://localhost:3000/client/filterCompanies', filter)
  }
}
