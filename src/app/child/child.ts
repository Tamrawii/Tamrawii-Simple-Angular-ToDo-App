import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input({ required: true }) titleParam = '';

  @Output() titleChanged = new EventEmitter<string>();

  changeTitle() {
    const newTitle = this.titleParam + '-updated';
    this.titleChanged.emit(newTitle);
  }
}
