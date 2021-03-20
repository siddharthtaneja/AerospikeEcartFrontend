import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {AppServiceService} from './app-service.service';
import {HttpClient} from '@angular/common/http';
import {HomePageServiceService} from '../homepage/home-page-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private Http: HttpClient, private authService: AuthenticationService, private router: Router, private service: AppServiceService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(data => {
      if (this.username === 'siddharthtaneja55@gmail.com' && this.password === '12345') {
        this.service.myfunc(true);
        alert('Hello Admin Ji');
      } else {
        this.service.myfunc(false);
        alert('Logged In As Guest');
      }
      this.service.isLoggedIn(true);
      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
    });
  }
}
