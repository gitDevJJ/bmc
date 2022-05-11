import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {path : 'login', component:LoginPageComponent},
  {path : 'test', component:HomePageComponent},
  {path : 'register', component:RegisterComponent},
  {path:'menu',component:MenuComponent}
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
