import { Component, OnInit } from '@angular/core';
import {UsercartService} from '../user-cart/usercart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paymentspage',
  templateUrl: './paymentspage.component.html',
  styleUrls: ['./paymentspage.component.scss']
})
export class PaymentspageComponent implements OnInit {
  MyProds;
  total;
  Code;
  test;
  constructor(private route:Router,private Obj:UsercartService) { }

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
  nextstep(){
    this.route.navigate(['orderdetails']).then(() => {
      window.location.reload();
    });
  }
  back(){
    this.route.navigate(['cart']);
  }
  Apply() {
    if(this.Code === 'sidisdope') {
      this.total = this.total - 300;
      this.test = true;
    }
    else {
      this.test = false;
    }

  }
}
