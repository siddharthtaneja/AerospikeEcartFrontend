import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  value;
  constructor() { }
  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }
  isAdmin() {
    const hj = sessionStorage.getItem('admin');
    return JSON.parse(hj);
  }
  myfunc(bool: boolean) {
    sessionStorage.setItem('admin', String(bool));
    return bool;
  }
  setMessage(data) {
    this.value = data;
    console.log(this.value);
  }
  getMessage() {
    return this.value;
  }
}
