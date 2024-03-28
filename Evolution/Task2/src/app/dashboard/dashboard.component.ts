import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class DashboardComponent implements OnInit, OnChanges {
  product: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.product = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataService.getProducts().subscribe((data) => {
      console.log(data);
    });
    console.log('Input value changed:', changes);
  }

  deleteData(id: number) {
    console.log(id);
    this.dataService.deleteProduct(id);
  }
}
