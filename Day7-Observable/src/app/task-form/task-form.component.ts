import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
  });

  constructor(private taskService: TaskService) {}

  onSubmit() {
    const taskId = this.taskService.lastAssignedId() + 1;
    const newTask: task = {
      id: taskId,
      title: this.taskForm.controls['title'].value,
      description: this.taskForm.controls['description'].value,
      dueDate: this.taskForm.controls['dueDate'].value,
      status: false,
    };
    console.log(newTask);
    this.taskService.addTask(newTask);

    this.taskForm.reset();
  }
}
