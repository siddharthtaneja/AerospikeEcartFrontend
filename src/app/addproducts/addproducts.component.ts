import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {
  name;
  category;
  price;
  image;
  newcategory
  constructor(private client: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  add() {
    let Var = {
      name: this.name,
      category: this.category,
      price: this.price,
      image: this.image,
    };
    this.client.post('http://localhost:8080/api/notes', Var).subscribe(data => {
    });
    this.route.navigate(['home']).then(() => {
     window.location.reload();
    });
  }
}
