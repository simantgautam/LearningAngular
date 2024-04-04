import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-showtask',
  standalone: true,
  imports: [NgFor],
  templateUrl: './showtask.component.html',
  styleUrl: './showtask.component.css',
})
export class ShowtaskComponent implements OnInit {
  tasks = ['Hello', 'pawan', 'Hanuman'];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.newTask.subscribe((val) => {
      this.tasks.push(val);
    });
  }
}
