import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor(private client: HttpClient) { }
  addtocart(id) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/mycart/cart/addItem/productId/' + id, {headers});
  }
  checkOut() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/mycart/checkout', {headers});
  }
  listcheckout() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/mycart/listcheckout', {headers});
  }
}
