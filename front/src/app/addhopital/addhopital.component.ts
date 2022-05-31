import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';

import { Hopital } from '../shared/models/hopital';
import { HopitalService } from '../shared/services/hopital.service';


@Component({
  selector: 'app-addhopital',
  templateUrl: './addhopital.component.html',
  styleUrls: ['./addhopital.component.css']
})
export class AddhopitalComponent implements OnInit {




  addHopitalForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private hopitalService:HopitalService,
    private router:Router,
   
    ) {

    let formControls = {
      nom: new FormControl('',[
        Validators.required,

      ]),
      address: new FormControl('',[
        Validators.required,

      ]),
      altitude: new FormControl('',[
        Validators.required,

      ]),
      latitude: new FormControl('',[
        Validators.required,

      ]),
    }


    this.addHopitalForm= this.fb.group(formControls)
  }

  get nom() { return this.addHopitalForm.get('nom') }
  get address() { return this.addHopitalForm.get('address') }
  get altitude() { return this.addHopitalForm.get('altitude') }
   get latitude() { return this.addHopitalForm.get('latitude') }



  ngOnInit(): void {
  }
  addHopital() {
    let data = this.addHopitalForm.value;
    console.log(data);



    console.log(this.addHopitalForm.value);

    this.hopitalService.addHopital(this.addHopitalForm.value).subscribe(
      res=>{


        this.router.navigate(['/hopitallist']);
      },
      err=>{
        console.log(err);
      }
    )

  }


}
