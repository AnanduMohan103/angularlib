import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:NavbarComponent
  },
  {
    path:"add",component:AddbookComponent
  },
  {
    path:"view",component:ViewbooksComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    NavbarComponent,
    ViewbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
