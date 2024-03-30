import { Injectable, OnInit } from '@angular/core';
import { task } from './task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  private tasks: task[] = [
    {
      title: 'Hello',
      id: 3,
      description: 'dmss',
      status: true,
      dueDate: 24 - 12 - 2000,
    },
  ];
  private filteredTask: task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredTask = this.tasks;
  }

  addTask(task: task): void {
    this.tasks.push(task);
  }

  getTasks(): any {
    return of(this.tasks);
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

  updateTaskStatus(taskId: number, newStatus: boolean): void {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks[index].status = newStatus;
    }
  }

  filetTask(status: boolean): any {
    let filterArr = this.tasks.filter((task) => {
      return task.status === status;
    });
    this.filteredTask = filterArr;
    return new Observable((observer) => {
      observer.next(this.filteredTask);
    });
  }

  lastAssignedId(): number {
    if (this.tasks.length === 0) return 0;
    let maxId = this.tasks.reduce((max, task) => {
      return task.id > max ? task.id : max;
    }, this.tasks[0].id);

    return maxId;
  }

  getId(): number {
    return this.tasks.length;
  }
}
