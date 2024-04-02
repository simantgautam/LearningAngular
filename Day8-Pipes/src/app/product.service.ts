import { Injectable } from '@angular/core';
import { product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: product[] = [
    { name: 'Product 1', category: 'Category A', price: 10, quantity: 100 },
    { name: 'Product 2', category: 'Category B', price: 20, quantity: 200 },
    { name: 'Product 3', category: 'Category A', price: 15, quantity: 150 },
    { name: 'Product 4', category: 'Category C', price: 25, quantity: 250 },
    { name: 'Product 5', category: 'Category B', price: 12, quantity: 120 },
    { name: 'Product 6', category: 'Category A', price: 18, quantity: 180 },
    { name: 'Product 7', category: 'Category C', price: 30, quantity: 300 },
    { name: 'Product 8', category: 'Category A', price: 22, quantity: 220 },
    { name: 'Product 9', category: 'Category B', price: 28, quantity: 280 },
    { name: 'Product 10', category: 'Category C', price: 35, quantity: 350 },
  ];

  getProduct() {
    return new Observable<product[]>((observer) => {
      observer.next(this.productList);
    });
  }

  constructor() {}
}
