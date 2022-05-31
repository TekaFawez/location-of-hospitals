import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HopitalService } from '../shared/services/hopital.service';

@Component({
  selector: 'app-infohopital',
  templateUrl: './infohopital.component.html',
  styleUrls: ['./infohopital.component.css']
})
export class InfohopitalComponent implements OnInit {
  hopitalList: any;
  hopitals:any



  constructor(private hopitalService:HopitalService, private route:ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    let idHopital= this.route.snapshot.params.id;
        console.log(idHopital);

    this.display()
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

  delete(hopital) {

    this.hopitalService.deleteHopital(hopital).subscribe(
      res=>{

        this.display();
      },
      err =>{
        console.log(err);
      }
    )
  }

}
