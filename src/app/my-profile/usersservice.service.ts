import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  constructor(private Obj: UsersserviceService, private client: HttpClient) { }
  getInfo() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return (this.client.get('http://localhost:8080/sign/get',{headers}));
  }

}
