import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hopital } from '../shared/models/hopital';
import { HopitalService } from '../shared/services/hopital.service';
@Component({
  selector: 'app-updatehopital',
  templateUrl: './updatehopital.component.html',
  styleUrls: ['./updatehopital.component.css']
})
export class UpdatehopitalComponent implements OnInit {
  updateHopitalForm: FormGroup;
  hopital:any;
  id:any;
  constructor(    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router : Router,
    private hopitalService:HopitalService) {    let formControls = {
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


      ]),}
      this. updateHopitalForm = this.fb.group(formControls)}

      get nom() { return this. updateHopitalForm.get('nom') }
      get address() { return this. updateHopitalForm.get('address') }
      get altitude() { return this. updateHopitalForm.get('altitude') }
      get latitude() { return this. updateHopitalForm.get('latitude') }

      ngOnInit(): void {

        let idHopital= this.route.snapshot.params.id;
        console.log(idHopital);




        this.hopitalService.getOneHopital(idHopital).subscribe(
          res=>{
            let user = res;
            console.log(user);



            this.updateHopitalForm.patchValue({
          nom : user.nom,
          address: user.address,
          altitude: user.altitude,
          latitude: user.latitude,


        })



          },
          err=>{
            console.log(err);
          }
        )

      }

      updateHopital() {
        let data = this.updateHopitalForm.value;
         console.log(data);

        let idMed = this.route.snapshot.params.id;
        let med= new Hopital(data.nom,data.address,data.altitude,data.latitude);

        console.log(med);




        this.hopitalService.updateHopital(med,idMed).subscribe(
          res=>{



            this.router.navigate(['/hopitallist']);
          },
          err=>{
            console.log(err);
          }
        )

      }

}
