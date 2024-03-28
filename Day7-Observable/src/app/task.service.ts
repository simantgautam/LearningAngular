import { Injectable } from '@angular/core';
import { task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: task[] = [];

  constructor() {}

  addTask(task: task): void {
    this.tasks.push(task);
  }

  getTasks(): task[] {
    return this.tasks;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  upadateTask(taskId: number, newTask: task) {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks[index] = newTask;
    }
  }

  getId(): number {
    return this.tasks.length;
  }
}
