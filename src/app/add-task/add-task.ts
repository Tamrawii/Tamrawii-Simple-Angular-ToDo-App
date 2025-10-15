import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input({ required: true }) actionParam = '';

  @Output() dataAdded = new EventEmitter<string>();

  transferData(taskTitle: string) {
    this.dataAdded.emit(taskTitle);
  }
}
