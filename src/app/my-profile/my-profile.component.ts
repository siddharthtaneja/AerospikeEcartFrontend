import { Component, OnInit } from '@angular/core';
import {UsersserviceService} from './usersservice.service';
import {Router} from '@angular/router';
import {AppServiceService} from '../login/app-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  MyProd;
  disabled = true;
  constructor(private client: HttpClient ,private Obj: UsersserviceService, private route: Router, private service : AppServiceService) { }
  ngOnInit() {
    this.Obj.getInfo().subscribe(data => {
      this.MyProd = data;
    });
  }
  orders() {
    this.route.navigate(['orderdetails']);
  }
  edit() {
    this.disabled = false;
  }
  save() {
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.put('http://localhost:8080/users/update', this.MyProd , {headers}).subscribe( data => {
      this.route.navigate(['myprofile']);
      this.disabled = true;
    });
  }
}
