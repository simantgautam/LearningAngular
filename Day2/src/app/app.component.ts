import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControllerComponent } from './MyComponent/controller/controller.component';
import { ToggleHighlightDirectiveDirective } from './toggle-highlight-directive.directive';
import { ConditionalDisplayDirective } from './conditional-display.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ControllerComponent,
    FormsModule,
    CommonModule,
    ToggleHighlightDirectiveDirective,
    ConditionalDisplayDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day2';
  isDisplay: boolean = true;
  search: string = '';
  SearchData: any = [];

  togglePara() {
    // console.log(this.isDisplay);
    this.isDisplay = !this.isDisplay;
  }

  products = [
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Smartphone', price: 800, available: true },
    { name: 'Headphones', price: 100, available: false },
    { name: 'Camera', price: 600, available: true },
    { name: 'Tablet', price: 300, available: false },
    { name: 'Fitness Tracker', price: 50, available: true },
    { name: 'Bluetooth Speaker', price: 80, available: true },
    { name: 'Gaming Console', price: 400, available: false },
    { name: 'Smartwatch', price: 150, available: true },
    { name: 'External Hard Drive', price: 120, available: true },
  ];

  searchProduct() {
    this.SearchData = this.products.filter((elem, i) => {
      return elem.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
