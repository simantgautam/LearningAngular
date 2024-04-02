import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day8-Pipes';
}
