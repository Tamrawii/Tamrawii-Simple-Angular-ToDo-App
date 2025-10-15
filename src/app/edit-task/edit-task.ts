import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask {
  @Input({ required: true }) actionParam: string = '';
  @Input() selectedTask: string = '';
  @Input() isDone: string = '';

  @Output() validerEvent = new EventEmitter<any>();

  editTaskEmitter(selectedIndex: string) {
    this.validerEvent.emit([this.selectedTask, selectedIndex]);
  }
}
