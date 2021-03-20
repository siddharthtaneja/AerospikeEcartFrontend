import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EComService {
  constructor(private client: HttpClient) { }

  getinformation() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/api/products', {headers});
  }
  isDark() {
    const h = sessionStorage.getItem('dark');
    return JSON.parse(h);
  }
  myfunc(bool: boolean){
    sessionStorage.setItem('dark' , String(bool));
    return bool;
  }
}
