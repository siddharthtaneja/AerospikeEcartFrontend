import { Component, OnInit } from '@angular/core';
import {UsercartService} from './usercart.service';
import {AddtocartService} from './addtocart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private Obj: UsercartService, private Obj1: AddtocartService, private route: Router) { }
  MyProds;
  total = 0;
  count = true;
  ngOnInit() {
    this.Obj.showcart().subscribe(data => {
      this.MyProds = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.MyProds.length; i++) {
          total = total + Number(this.MyProds[i].items.price) * Number(this.MyProds[i].quantity);
        }
        this.total = total;
      });
  }
  decrement(abc) {
    this.count = true;
    this.Obj.decrement(1, abc).subscribe(data => {
      this.Obj.showcart().subscribe(data1 => {
        this.MyProds = data1;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.MyProds.length; i++) {
          total = total + Number(this.MyProds[i].items.price) * Number(this.MyProds[i].quantity);
        }
        this.total = total;
      });
    });
  }
  increment(abc1) {
    this.Obj.increment(1, abc1).subscribe(data => {
      if (data === 'unsuccessfull') {
        this.count = false;
      }
      else {
      this.Obj.showcart().subscribe(data1 => {
        this.MyProds = data1;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.MyProds.length; i++) {
          total = total + Number(this.MyProds[i].items.price) * Number(this.MyProds[i].quantity);
        }
        this.total = total;

      });
      this.count = true;
    }
    });
  }
  deletion(abc2) {

    this.Obj.deletion(abc2).subscribe(data => {
      this.MyProds = data;
      this.Obj.showcart().subscribe(data1 => {
        this.MyProds = data1;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.MyProds.length; i++) {
          total = total + Number(this.MyProds[i].items.price) * Number(this.MyProds[i].quantity);
        }
        this.total = total;
      });
    });
    window.location.reload();
  }
  CheckOut() {
    this.route.navigate(['payment']);
  }
  ShopMore() {
    this.route.navigate(['home']).then( () => {
      window.location.reload();
    });
  }
}
