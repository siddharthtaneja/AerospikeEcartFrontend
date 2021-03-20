import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppServiceService} from '../login/app-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  constructor(private Http: HttpClient, private service: AppServiceService, private route: Router) { }
  email;
  password;
  repeat;
  name;
  address;
  Num;
  myprod;
  m = 0;
  ngOnInit() {
    this.Http.get('http://localhost:8080/users/getuser').subscribe( data => {
      this.myprod = data;
    });
    this.m = 0;
    console.log(this.m);
  }
  SignUp() {
    this.m = 0;
    let Myvar = {
      Num: this.Num,
      name: this.name,
      address: this.address,
      email: this.email,
      password: this.password,
      repeat: this.repeat
    };
    if(Myvar.password !== Myvar.repeat) {
      alert('Enter same Password plz');
      this.m = 1;
    }
    if(isNaN(this.Num)){
      alert('Plz fill number only');
      this.m = 1;
    }
    if(this.Num.length > 10 || this.Num.length < 10){
      alert('Plz enter 10 digits');
      this.m = 1;
    }
    if(this.email.indexOf('@') <= 4){
      this.m = 1;
      alert('missing @ at correct place');
    }0
    if(this.email.charAt(this.email.length - 4) !== '.'){
      this.m = 1;
      alert('Missing . at correct place');
    }
    // for(let i = 0; i < this.email.length;i++){
    //   if(this.email.charAt(i) !== '@'){
    //
    //   }
    // }
    for( let i = 0; i < this.myprod.length; i++) {
      if (this.myprod[i].email === Myvar.email) {
        alert('User Exists');
        this.m = 1;
        break;
      }
    }
    console.log(this.m);
    if (this.m === 0) {
      alert('New User');
      this.Http.post('http://localhost:8080/users/signup', Myvar).subscribe(data => {
        this.route.navigate(['/login']);
      });
    }
    this.m = 0;
  }
}
