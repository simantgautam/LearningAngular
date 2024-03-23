import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: any[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  constructor() {}

  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  addProduct(product: any) {
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
