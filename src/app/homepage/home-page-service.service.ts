import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  constructor(private client: HttpClient) { }
  getBycat(category) {
    // const  = './assets/Data/Product.json';
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/api/cat/' + category, {headers});
  }
  getByCatAndPrice(category, price1 , price2) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url1 = 'http://localhost:8080/api/' + category + '/' + price1 + '/' + price2;
    return this.client.get(url1, {headers});
  }
  getPrice(price1, price2) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/' + price1 + '/' + price2;
    return this.client.get(url, {headers});
  }
  Search(name) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/api/fish/' + name, {headers});
  }
}
