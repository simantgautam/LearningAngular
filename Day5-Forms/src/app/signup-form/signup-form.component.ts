import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  signUpForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });

  onSubmit() {
    const pass = this.signUpForm.controls['password'].value;
    const confirmPass = this.signUpForm.controls['confirmPassword'].value;
    if (pass === confirmPass) {
      console.log(this.signUpForm);
      const data = this.signUpForm.value;
      localStorage.setItem('formData', JSON.stringify(data));
      this.signUpForm.reset();
    }
  }

  // passwordMatch(){
  //   if(this.signUpForm)
  // }
}
