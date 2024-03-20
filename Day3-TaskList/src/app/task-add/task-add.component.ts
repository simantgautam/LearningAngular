import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule, TaskListComponent, CommonModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  newTask: string = '';

  @Output() newTaskObj = new EventEmitter<object>();

  addTask() {
    this.newTaskObj.emit({ title: this.newTask, Completed: false });
    this.newTask = '';
  }
}
