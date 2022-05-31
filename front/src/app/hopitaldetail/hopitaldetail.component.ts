import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../shared/services/hopital.service';
@Component({
  selector: 'app-hopitaldetail',
  templateUrl: './hopitaldetail.component.html',
  styleUrls: ['./hopitaldetail.component.css']
})
export class HopitaldetailComponent implements OnInit {

  constructor(private hopitalService:HopitalService ) { }
  hopitalList: any;
  hopitals:any
  ngOnInit() {
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



}
