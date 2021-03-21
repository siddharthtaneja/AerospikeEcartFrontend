import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/users/getuser', {headers}).pipe(
      map(data => {
        sessionStorage.setItem('token', btoa(username + ':' + password));
      })
    );
  }
  checkuserlogin() {
    const user = sessionStorage.getItem('token');
    return !(user === null);
  }
  getPass(email) {
    return this.http.get('http://localhost:8080/users/getPass/' + email);
  }
}
