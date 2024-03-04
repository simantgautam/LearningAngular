import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HighlightDirective } from '../../highlight.directive';
import { UppercaseDirective } from '../../uppercase.directive';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, HighlightDirective, UppercaseDirective],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  items: string[] = ['Ram', 'Shyam', 'Simant', 'Sourabh', 'Sattu'];
  color = '';
}
