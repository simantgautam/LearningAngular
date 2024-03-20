import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  // @Input() task: any = {title: string , comleted : boolean};
  @Input() task: any = {};
  completed: boolean = false;
  id: number = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.completed = this.task.comleted ? true : false;
    this.id = this.task.taskId;
  }

  changeStatus() {
    let status = !this.completed;
    // console.log(status, this.id);
    this.taskService.updateTask(this.id, status);
  }
}
