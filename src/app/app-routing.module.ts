import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Main_Routes} from './app.route';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(Main_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
