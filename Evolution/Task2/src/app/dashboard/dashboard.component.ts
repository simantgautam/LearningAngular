import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SignUpComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  product: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.product = data;
    });
  }

  deleteData() {}
}
