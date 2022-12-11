import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   API_URL:string=" http://localhost:3001/products/";
  constructor(private http:HttpClient) { }
   getAllProducts(){
      return this.http.get(this.API_URL);
   }
   getProductById(id:any){
    return this.http.get(`${this.API_URL}${id}`);
   }
   postAddProduct(data:any){
     return this.http.post(`${this.API_URL}`,data)
   }
   deleteProduct(id:any){
    return this.http.delete(`${this.API_URL}${id}`);
   }
   updateProduct(id:any,data:any){
    return this.http.put(`${this.API_URL}${id}`,data);
   }
}
