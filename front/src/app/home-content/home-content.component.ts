import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  acceuil= "assets/images/acceuil.png";
  hopital= "assets/images/hopital.png";
  med= "assets/images/med.png";


  constructor() { }

  ngOnInit(): void {
  }

}
