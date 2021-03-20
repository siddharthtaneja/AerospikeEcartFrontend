import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ExtensionComponent } from './extension/extension.component';
import { SignComponent } from './sign/sign.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {EComService} from './ecom.service';
import {HttpClientModule} from '@angular/common/http';
import { FrontPageComponent } from './front-page/front-page.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './login/authentication.service';
import {AppServiceService} from './login/app-service.service';
import {HomePageServiceService} from './homepage/home-page-service.service';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { PaymentspageComponent } from './paymentspage/paymentspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserCartComponent,
    CartComponent,
    NavBarComponent,
    LoginComponent,
    ExtensionComponent,
    SignComponent,
    ProductdetailsComponent,
    FrontPageComponent,
    OrderdetailsComponent,
    MyProfileComponent,
    AddproductsComponent,
    PaymentspageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService, AppServiceService , EComService , HomePageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
