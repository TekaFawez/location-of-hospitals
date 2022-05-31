import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log = "assets/images/log.png";
  submitted = false;
  loginForm: FormGroup;
  loginUserData = {}
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password:[''],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.userService.loginUser(this.loginUserData).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/rendezvous']);
      }
    )
  }

}
