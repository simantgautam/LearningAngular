import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewtaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  onSubmit() {
    console.log(this.newTask);
    this.taskService.onCreate(this.newTask);
  }
}
