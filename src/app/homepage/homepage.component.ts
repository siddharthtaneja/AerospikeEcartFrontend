import { Component, OnInit } from '@angular/core';
import {EComService} from '../ecom.service';
import {HomePageServiceService} from './home-page-service.service';
import {Router} from '@angular/router';
import {AppServiceService} from '../login/app-service.service';
import {AddtocartService} from '../user-cart/addtocart.service';
import {UsersserviceService} from '../my-profile/usersservice.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  constructor(private client: HttpClient, private Obj: EComService, private Obj1: HomePageServiceService, private router: Router, private service: AppServiceService) {
  }

  MyVar = {};
  CatAndPrice;
  name;
  price;
  seevar;
  vearch;
  ngOnInit() {
    console.log(this.vearch);
    if (!this.service.checkLogin()) {
      this.router.navigate(['login']);
    }
    return this.Obj.getinformation().subscribe((data) => {
      this.MyVar = data;
      console.log(this.MyVar);
    });

  }

  showClothing() {
    this.CatAndPrice = 'Clothing';
    this.Obj1.getBycat('Clothing').subscribe(data1 => {
      this.MyVar = data1;
    });
  }
  showShoes() {
    this.CatAndPrice = 'Shoes';
    this.Obj1.getBycat('Shoes').subscribe((data) => {
      this.MyVar = data;
    });
  }
  showBooks() {
    this.CatAndPrice = 'Books';
    this.Obj1.getBycat('Books').subscribe(data2 => {
      this.MyVar = data2;
    });
  }

  showHome() {
    this.CatAndPrice = null;
    this.Obj.getinformation().subscribe(data3 => {
      this.MyVar = data3;
    });
  }

  showSports() {
    this.CatAndPrice = 'Sports';
    this.Obj1.getBycat('Sports').subscribe(data4 => {
      this.MyVar = data4;
    });
  }

  showMy(p1, p2) {
    if (!this.CatAndPrice) {
      this.Obj1.getPrice(p1, p2).subscribe(data6 => {
        this.MyVar = data6;
      });
    } else {
      this.Obj1.getByCatAndPrice(this.CatAndPrice, p1, p2).subscribe(data5 => {
        this.MyVar = data5;
      });
    }
  }

  add() {
    this.router.navigate(['add']);
  }
  search() {
    this.Obj1.Search(this.seevar).subscribe( data => {
      this.MyVar = data;
      console.log(this.MyVar);
      if (this.MyVar === '{}') {
        alert('NO PRoducts of this name');
      }
    });
  }
}
