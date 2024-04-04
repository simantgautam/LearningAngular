import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewtaskComponent } from './newtask/newtask.component';
import { ShowtaskComponent } from './showtask/showtask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewtaskComponent, ShowtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'subjects';
}
