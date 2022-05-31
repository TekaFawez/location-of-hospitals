// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.


import { HomeContentComponent } from './home-content/home-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddhopitalComponent } from './addhopital/addhopital.component';
import { HopitallistComponent } from './hopitallist/hopitallist.component';
import { InfohopitalComponent } from './infohopital/infohopital.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatehopitalComponent } from './updatehopital/updatehopital.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { DateComponent } from './date/date.component';
import { AdminComponent } from './admin/admin.component';
import { HopitaldetailComponent } from './hopitaldetail/hopitaldetail.component';
//import { HopitaldetailComponent } from './hopitaldetail/hopitaldetail.component';




const routes: Routes = [

  {
    path: '',
    component: HomeContentComponent
  },

  {

    path: 'hopital',
    component: HopitallistComponent
  },
  {

    path: 'updatehopital/:id',
    component: UpdatehopitalComponent
  },

  {

    path: 'hopitallist',
    component: InfohopitalComponent
  },
  {

    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },



  {
    path: 'addhopital',
    component: AddhopitalComponent,

  },

  {
    path: 'rendezvous',
    component: RendezvousComponent
  },

  {
    path: 'date',
    component: DateComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'hopitaldetail',
    component: HopitaldetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
