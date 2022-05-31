import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';


@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {

  doctor="assets/images/doctor.png";
  loc="assets/images/loc.png";



 constructor( private router: Router) { }

 ngOnInit(): void {

 }




}
