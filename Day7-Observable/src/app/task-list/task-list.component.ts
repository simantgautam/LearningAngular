import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  taskList: task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
    console.log(this.taskList);
  }

  deleteTask(id: number) {
    // console.log(this.taskService.getTasks());
    this.taskService.deleteTask(id);
    this.taskList = this.taskService.getTasks();
  }

  completion(e: any) {
    console.log(e.target.value);
  }
}
