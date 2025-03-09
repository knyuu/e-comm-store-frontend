import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../types/category';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  http = inject(HttpClient);
  URL = environment.apiUrl;
  constructor() { }

  getCategories(){
    return this.http.get<Category[]>(this.URL + '/category');
  }

  getCategoryById(id:string){
    return this.http.get<Category>(this.URL + '/category/' + id);
  }

  addCategory(name:string){
    return this.http.post(this.URL + '/category',{
      name:name
    });
  }

  updateCategory(id: string, name: string){
    return this.http.put(this.URL + '/category/' + id,{
      name:name
    });
  }

  deleteCategoryById(id:string){
    return this.http.delete(this.URL + '/category/' + id);
  }
}