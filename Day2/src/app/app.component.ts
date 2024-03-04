import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControllerComponent } from './MyComponent/controller/controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day2';
}
