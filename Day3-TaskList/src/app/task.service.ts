import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  AllTasks = [
    {
      taskId: 1,
      title: 'Simant',
      Completed: true,
    },
  ];
  constructor() {}

  updateTask(taskId: number, newStatus: boolean) {
    const taskToUpdate = this.AllTasks.find((task) => task.taskId === taskId);
    if (taskToUpdate) {
      taskToUpdate.Completed = newStatus;
    }
    console.log(taskToUpdate);
  }
}
