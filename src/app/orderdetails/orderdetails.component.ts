import { Component, OnInit } from '@angular/core';
import {AddtocartService} from '../user-cart/addtocart.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
  MyProd;

  constructor(private Obj: AddtocartService, private client: HttpClient, private route: Router) {
  }

  ngOnInit() {
    this.Obj.checkOut().subscribe((data) => {
      this.MyProd = data;
    });
  }
  goHome() {
    this.route.navigate(['home']);
  }
}
