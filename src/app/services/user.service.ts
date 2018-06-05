import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  canActivate:boolean = true; 
  user:any; 
  constructor(private http: HttpClient) { }
  login(user:any):Observable<any>{
      return this.http.post("http://localhost:5000/user/login", user); //no need to map or we can add - .map(response => response.json())
  }
  
}
