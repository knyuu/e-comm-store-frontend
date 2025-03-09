import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  http = inject(HttpClient);
  URL = environment.apiUrl;
  constructor() { }

  getBrands (){
    return this.http.get<Brand[]>(this.URL + '/brand');
  }

  getBrandById (id: string){
    return this.http.get<Brand>(this.URL + '/brand/' + id);
  }

  addBrand (name: string){
    return this.http.post(this.URL + '/brand', {
      name: name
    })
  }

  updateBrandById (id: string, name: string){
    return this.http.put(this.URL + '/brand/' + id,{
      name: name
    })
  }

  deleteBrandById (id: string) {
    return this.http.delete(this.URL + '/brand/' + id);
  }
}
