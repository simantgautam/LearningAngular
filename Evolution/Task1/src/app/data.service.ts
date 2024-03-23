import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  products = [
    { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
    { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
    { id: 5, productName: 'Chair', price: 100, category: 'Furniture' },
    { id: 6, productName: 'Computer', price: 1200, category: 'Electronics' },
    { id: 7, productName: 'Keyboard', price: 800, category: 'Electronics' },
    { id: 8, productName: 'Mouse', price: 150, category: 'Electronics' },
    { id: 9, productName: 'Bed', price: 300, category: 'Furniture' },
    { id: 10, productName: 'Table', price: 100, category: 'Furniture' },
    // Add more dummy data here...
  ];

  getProductData(): Observable<any[]> {
    return of(this.products);
  }

  getProductDetail(id: number): Observable<any> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}
