import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  constructor(private  client: HttpClient) {
  }

  getinformation(MyProd: any) {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/par/' + MyProd;
    return this.client.get(url, {headers});
  }
}
