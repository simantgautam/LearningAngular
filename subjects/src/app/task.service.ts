import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // newTask = new EventEmitter<string>();
  newTask = new Subject<string>();

  constructor() {}

  onCreate(value: string) {
    this.newTask.next(value);
  }
}
