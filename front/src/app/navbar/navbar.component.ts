import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  admin= "assets/images/admin.png";
  logooo= "assets/images/lo.png";
  constructor() { }

  ngOnInit() {
  }

}
