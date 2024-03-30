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
    this.taskService.getTasks().subscribe((val: any) => {
      this.taskList = val;
      console.log(val);
    });

    console.log(this.taskList);
  }

  deleteTask(id: number) {
    // console.log(this.taskService.getTasks());
    this.taskService.deleteTask(id);
    this.taskService.getTasks().subscribe((val: any) => {
      console.log(val);
    });
  }

  toggle(index: number, id: number) {
    let isChecked = this.taskList[index].status;
    isChecked = !isChecked;
    this.taskService.updateTaskStatus(id, isChecked);
    console.log(isChecked);
  }

  handleChange(e: any) {
    const querry = e.target.value;
    if (querry === 'completed') {
      this.taskService
        .filetTask(true)
        .subscribe((val: any) => (this.taskList = val));
    } else if (querry === 'notComplete') {
      this.taskService
        .filetTask(false)
        .subscribe((val: any) => (this.taskList = val));
    } else {
      this.taskService
        .getTasks()
        .subscribe((val: any) => (this.taskList = val));
    }
  }
}
