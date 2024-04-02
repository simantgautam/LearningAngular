import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, SortPipe, FilterPipe],
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css',
})
export class ProductDashboardComponent implements OnInit {
  productData: product[] = [];
  sortByQuantity: string = 'Sort By Quantity';
  sortByPrice: string = 'Sort By Price';
  asc: boolean = true;
  sortOn: string = '';
  inputText: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      this.productData = data;
      console.log(data);
    });
  }

  sortBy(name: string, event: any) {
    this.sortOn = name;
    if (event.target.value === 'High To Low') {
      this.asc = false;
    } else if (event.target.value === 'Low To High') {
      this.asc = true;
    }
    console.log(event.target.value);
  }

  onSubmit() {
    console.log(this.inputText);
  }
}
