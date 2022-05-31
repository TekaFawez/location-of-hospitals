// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HopitallistComponent } from './hopitallist/hopitallist.component';

import { HomeContentComponent } from './home-content/home-content.component';
import { FooterComponent } from './footer/footer.component';
import { AddhopitalComponent } from './addhopital/addhopital.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

import { NavbarComponent } from './navbar/navbar.component';
////import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InfohopitalComponent } from './infohopital/infohopital.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatehopitalComponent } from './updatehopital/updatehopital.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { DateComponent } from './date/date.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HopitaldetailComponent } from './hopitaldetail/hopitaldetail.component';


//import { AccountComponent, AccountDetails } from './account/index';
 //import { LoginComponent, ResetPasswordComponent } from './login/index';



@NgModule({
  declarations: [
    AppComponent,
    HopitallistComponent,
    HomeContentComponent,
    FooterComponent,
    AddhopitalComponent,
    AdminnavbarComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    InfohopitalComponent,
    UpdatehopitalComponent,
    RendezvousComponent,
    DateComponent,
    AdminComponent,
    HopitaldetailComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [HopitallistComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
