import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsercartService {

  constructor(private route: Router, private client: HttpClient) {
  }

  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/mycart/cart';
    return this.client.get(url, {headers});
  }

  decrement(value, productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/mycart/cart/decrement/' + value + '/' + 'product/' + productId, {headers});
  }

  increment(value, productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/mycart/cart/increment/' + value + '/' + 'product/' + productId, {headers});
  }

  deletion(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/mycart/cart/deleteItem/productId/' + productId, {headers});
  }
}
