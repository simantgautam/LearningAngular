import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  sortAsc: boolean = true;
  inputText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProductData().subscribe((data) => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
  }

  toggleSort(): void {
    this.sortAsc = !this.sortAsc;
    this.filteredProducts.sort((a, b) => {
      if (a.price < b.price) {
        return this.sortAsc ? -1 : 1;
      } else if (a.price > b.price) {
        return this.sortAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  applyFilter() {
    this.filteredProducts = this.products.filter((product) =>
      product.productName.toLowerCase().includes(this.inputText.toLowerCase())
    );
  }
}
