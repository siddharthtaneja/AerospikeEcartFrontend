import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ReviewDetails;
  constructor(private client: HttpHeaders, private route: ActivatedRoute ) { }
  MyProd;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('productId'));
      this.MyProd = id;
    });
  }
}
