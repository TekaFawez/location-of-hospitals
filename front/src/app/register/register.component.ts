import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public showPassword: boolean;
  public showPasswordOnPress: boolean;
  patient= "assets/images/patient.png"
  submitted = false;
  registerForm: FormGroup;
  registerUserData = {}
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email:[''],
      password:[''],
      telephone:['']
    });
  }

  onSubmit() {
    this.submitted = true;
    this.userService.register(this.registerUserData).subscribe(
      data => {
        this.router.navigate(['/login']);
      }
    )
  }

}
