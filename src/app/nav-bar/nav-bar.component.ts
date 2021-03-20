import { Component, OnInit} from '@angular/core';
import {AppServiceService} from '../login/app-service.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {HttpClient} from '@angular/common/http';
import {UsersserviceService} from '../my-profile/usersservice.service';
import {HomePageServiceService} from '../homepage/home-page-service.service';
import {EComService} from '../ecom.service';
import {UsercartService} from '../user-cart/usercart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  prod;
  seevar;
  products;
  length;
  constructor(private Obj:UsercartService,private httpClient: HttpClient, private service: AppServiceService, private route: Router, private authService: AuthenticationService, private Z: UsersserviceService, private ser: EComService) {
  }

  ngOnInit() {
    this.Z.getInfo().subscribe(data => {
      this.prod = data;
    });
    this.Obj.showcart().subscribe((data) => {
      this.products = data;
      this.length = this.products.length;
    });
  }
  task(){
    console.log(this.seevar);
    this.service.setMessage(this.seevar);
  }
  logout() {
    if (this.service.checkLogin()) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('admin');
      sessionStorage.removeItem('auth');
      this.service.isLoggedIn(false);
      this.httpClient.get('http://localhost:8080/users/logout').subscribe(res => {
      });
      this.route.navigate(['/login']);
    }
  }
  dark(){
    this.ser.myfunc(true);
  }
  light() {
    this.ser.myfunc(false);
  }
  login() {
    this.route.navigate(['login']);
  }
}

