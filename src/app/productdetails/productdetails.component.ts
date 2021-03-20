import { Component, OnInit } from '@angular/core';
import {HomepageComponent} from '../homepage/homepage.component';
import {DetailsServiceService} from './details-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppServiceService} from '../login/app-service.service';
import {AddtocartService} from '../user-cart/addtocart.service';
import {EComService} from '../ecom.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UsersserviceService} from '../my-profile/usersservice.service';
import {forEachComment} from 'tslint';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  MyProd;
  Some;
  constructor(private ObjOrder: AddtocartService,private Z: UsersserviceService,private  client: HttpClient,private Obj: AddtocartService, private Details: DetailsServiceService, private router: Router, private route: ActivatedRoute, private service: AppServiceService,private Ecom: EComService) {
  }
  ProductDetails = {};
  UserDetails;
  Review;
  ReviewDetails;
  Review2;
  test;
  tr;
  i;
  g;
  NewPrice = false;
  angulars;
  private angular: any;
  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['login']);
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.MyProd = id;
    }),
      this.Details.getinformation(this.MyProd).subscribe((data) => {
        this.ProductDetails = data;
      });
    this.ObjOrder.listcheckout().subscribe((data) => {
      this.i = data;
      this.Details.getinformation(this.MyProd).subscribe((data2) => {
        this.Review2 = data2;
        for(this.g = 0 ;this.g < this.i.length ; this.g++) {
          if(this.i[this.g].itemName === this.Review2.name){
            this.NewPrice = true;
            break;
          }
        }
      });
     });
    this.Z.getInfo().subscribe((data) => {
      this.UserDetails = data;
    });
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/review/get/' + this.MyProd;
    return this.client.get(url,{headers}).subscribe((data) => {
      this.ReviewDetails = data;
      console.log(data);
    });

     }

  addtocart() {
      this.Obj.addtocart(this.MyProd).subscribe(data2 => {
        alert('Successfully Added ');
      this.router.navigate(['cart']).then(()=>{
        window.location.reload();
      });
    });

  }
  PostReview(Review){
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/review/post/' + this.MyProd + '/' + Review;
    this.client.get(url, {headers}).subscribe( (data) => {
      this.test = data;
    });
    alert('Review Added');
    this.ngOnInit();
  }
  delete() {
    confirm('Do you really want to delete');
    const  token = sessionStorage.getItem('token');
    const  headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/delete/' + this.MyProd;
    this.client.get(url, {headers}).subscribe( (data) => {
    });
    alert('Successfully Deleted');
    this.router.navigate(['home']);
  }
}

