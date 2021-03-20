import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss']
})
export class ExtensionComponent implements OnInit {
  MyProd;
  Myprod2;
  ReviewDetails;
  newreview;
  disabled = true;
  constructor(private route: ActivatedRoute, private client: HttpClient,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.MyProd = id;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id2'));
      this.Myprod2 = id;
    });
    console.log(this.MyProd);
    console.log(this.Myprod2);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/review/getReview/' + this.MyProd;
    this.client.get(url, {headers}).subscribe((data) => {
      this.ReviewDetails = data;
    });
  }
  edit(){
    this.disabled = false;
  }
  delete() {
    confirm('Do you want too delete');
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/review/delete/' + this.MyProd;
    this.client.get(url, {headers}).subscribe((data) => {
    });
    this.router.navigate(['productdetails/' + this.Myprod2]).then(() => {
      window.location.reload();
    });
  }
  save() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/review/edit/' + this.MyProd + '/' + this.newreview;
    this.client.post(url, this.ReviewDetails,{headers}).subscribe((data) => {
    });
    this.router.navigate(['productdetails/' + this.Myprod2]).then(() => {
      window.location.reload();
    });
  }

}
