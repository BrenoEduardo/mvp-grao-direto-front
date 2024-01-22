import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductForm } from '../../interface/colaborator.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ColaboratorService {
  public url = enviroment.apiUrl;

  constructor(private http: HttpClient) { }

  sendProduct(product: ProductForm){
    return this.http.post(`${this.url}colaborator/registerProduct`,product)
  }
  getProductsById(userId: string){
    return this.http.get(`${this.url}colaborator/getProductsBy/${userId}`)
  }
  deleteProduct(idProduct: string){
    return this.http.delete(`${this.url}colaborator/deleteProduct/${idProduct}`)
  }
}
