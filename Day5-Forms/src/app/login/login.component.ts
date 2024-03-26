import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginAuth: any;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private route: Router) {}

  ngOnInit(): void {
    let userData: any = JSON.parse(localStorage.getItem('formData') ?? 'null');
    this.loginAuth = userData;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const email = this.loginForm.controls['email'].value;
    const pass = this.loginForm.controls['password'].value;
    console.log(this.loginAuth);
    if (
      email &&
      pass &&
      email === this.loginAuth.email &&
      pass === this.loginAuth.password
    ) {
      alert('Login Successful');
      this.route.navigate(['/']);
    }
  }
}
