import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { marker, icon } from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import { HopitalService } from '../shared/services/hopital.service';
@Component({
  selector: 'app-hopitallist',
  templateUrl: './hopitallist.component.html',
  styleUrls: ['./hopitallist.component.css']
})
export class HopitallistComponent implements OnInit {


  hopitals:any

  hopitalList:any;

  private map:any;

  constructor( private router: Router,private  hopitalService:HopitalService) { }

  ngOnInit(): void {
    this.display()

  }

  ngAfterViewInit(): void {

  }
  private initMap(lat:number,long:number): void {
    var myIcon = icon({
      iconUrl: 'assets/images/location.png',
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      shadowUrl: 'marker-shadow.png',
    });
    setTimeout(() => {
          this.map = L.map('map', {
      center: [ lat,long ],
      zoom: 16
    });
    const tiles =L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  });

    tiles.addTo(this.map);
   let mark=this.hopitals;
    L.marker([lat,long]).addTo(this.map);

    for (const placeLocation of this.hopitals) {
      L.marker([placeLocation.altitude,placeLocation.latitude]).addTo(this.map);
      marker(placeLocation.altitude, placeLocation.latitude).addTo(this.map).bindPopup(placeLocation.nom[0]);

    }
  }, 550);

  }

  goToBottom() {
    window.scrollTo(0,document.body.scrollHeight);
  }



    hopitalLocation(lat:number,long:number){
      if (this.map != undefined) { this.map.remove(); }
      this.initMap(lat, long)

      this.goToBottom()
    }
    display(){
      this.hopitalService.getAllHopital().subscribe(
        res=>{

         this.hopitals=res
        },
        err=>{
          console.log(err);
        }
      )
    }

}
