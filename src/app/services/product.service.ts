import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  
  getCatagories():Observable<any>{
      return this.http.get("http://localhost:5000/product/getCatagories");
  }
  
  getProducts():Observable<any>{
      return this.http.get("http://localhost:5000/product/getProducts");
  }
  
  getProduct(id):Observable<any>{
      return this.http.get(`http://localhost:5000/product/getProduct/${id}`);
  }
  
  updateProduct(product):Observable<any>{
      return this.http.post(`http://localhost:5000/product/updateProduct`, product);
  }
  
  deleteProduct(product):Observable<any>{
      return this.http.post(`http://localhost:5000/product/deleteProduct`, product);
  }
  
  addProduct(product):Observable<any>{
      return this.http.post("http://localhost:5000/product/addProduct", product);
  }
  
  
}
