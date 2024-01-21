import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductForm } from '../../interface/colaborator.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboratorService {

  constructor(private http: HttpClient) { }

  sendProduct(product: ProductForm){
    return this.http.post('http://localhost:3000/colaborator/registerProduct',product)
  }
  getProductsById(userId: string){
    return this.http.get(`http://localhost:3000/colaborator/getProductsBy/${userId}`)
  }
}
