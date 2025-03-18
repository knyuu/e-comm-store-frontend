import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl + "/products")
  }

  getProductById(id:string) {
    return this.http.get<Product>(this.apiUrl + "/products"  + id);
  }

  addProduct(model: Product) {
    return this.http.post(this.apiUrl + "/product", model);
  }

  updateProduct(id:string, model: Product) {
    return this.http.put(this.apiUrl + "/product" + id, model);
  }

  deleteProduct(id: string){
    return this.http.delete(this.apiUrl + "/product" + id);
  }
}
