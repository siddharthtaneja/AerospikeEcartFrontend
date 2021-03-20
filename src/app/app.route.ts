import {HomepageComponent} from './homepage/homepage.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignComponent} from './sign/sign.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import {FrontPageComponent} from './front-page/front-page.component';
import {OrderdetailsComponent} from './orderdetails/orderdetails.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ExtensionComponent} from './extension/extension.component';
import {AddproductsComponent} from './addproducts/addproducts.component';
import {CartComponent} from './cart/cart.component';
import {PaymentspageComponent} from './paymentspage/paymentspage.component';
// tslint:disable-next-line:variable-name
export const Main_Routes: Routes = [
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full'
  },
  {
    path: 'payment',
    component: PaymentspageComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: 'productdetails/:id',
    component: ProductdetailsComponent,
  },
  {
    path: 'reviews/:id/:id2',
    component: ExtensionComponent,
  },
  {
    path: 'front',
    component: FrontPageComponent
  },
  {
    path: 'cart/:id',
    component: UserCartComponent
  },
  {
    path: 'orderdetails',
    component: OrderdetailsComponent
  },
  {
    path: 'Myprofile',
    component: MyProfileComponent,
  },
  {
    path: 'car',
    component: ExtensionComponent,
  },
  {
    path: 'add',
    component: AddproductsComponent,
  }
];
