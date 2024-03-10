import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day1';
  username: string = '';
  isError = true;
  pageTitle = 'Angular Data Binding Practice';
  a = 10;
  b = 20;
  imageUrl =
    'https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj';
  disable = false;

  toggleChange() {
    this.disable = !this.disable;
    console.log(this.disable);
  }

  onClick() {
    console.log('Button clicked');
  }

  onSubmit() {
    console.log(this.username);
    this.username = '';
  }

  onChange() {
    this.isError = !this.isError;
  }

  constructor() {
    // console.log(this.username);
  }
}
