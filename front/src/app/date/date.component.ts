import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  email = "assets/images/email.png";
  call = "assets/images/call.png";
  doctor = "assets/images/doctor.png";
  constructor() { }

  ngOnInit() {
  }

}
