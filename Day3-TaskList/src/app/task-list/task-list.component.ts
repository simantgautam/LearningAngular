import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CommonModule, TaskAddComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks = [{}];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.AllTasks;
  }

  handleTaskAdded(newTask: any) {
    const nTask = newTask;
    nTask.taskId = this.tasks.length + 1;
    // console.log(nTask);
    this.taskService.AllTasks.push(nTask);
  }
}
