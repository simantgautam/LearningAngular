import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  length: number = 0;
  newData: any = {};

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.getProducts().subscribe((data) => {
      this.length = data.length;
    });
    console.log(this.length);
    this.newData = this.productForm.value;
    this.newData.id = this.length + 1;
    console.log(this.newData);
    this.dataService.addProduct(this.newData);
  }
}
