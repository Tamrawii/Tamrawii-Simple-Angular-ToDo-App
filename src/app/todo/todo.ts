import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  currentIndex = 4;
  taskTitle = '';
  taskTitle2 = '';
  selectedId = 0;

  todos = [
    { id: 1, task: 'Présenter les composants Angular', isDone: 'done' },
    { id: 2, task: 'Présenter les mécanismes de binding', isDone: 'undone' },
    { id: 3, task: 'Introduction aux directives', isDone: 'done' },
  ];

  addTask = () => {
    if (this.taskTitle != '')
      this.todos.push({ id: this.currentIndex++, task: this.taskTitle, isDone: 'undone' });
    this.taskTitle = '';
  };

  deleteTask = (taskId: number) => {
    this.todos = this.todos.filter((todo) => todo.id != taskId);
  };

  editTask = (taskId: number) => {
    this.selectedId = taskId;
    const todo = this.todos.find((todo) => todo.id == taskId);
    this.taskTitle2 = todo?.task || '';
  };

  updateTask = () => {
    const todo = this.todos.find((todo) => todo.id == this.selectedId);
    if (this.taskTitle2 != '') todo!.task = this.taskTitle2;

    this.taskTitle2 = '';
  };

  lineThrough = (taskId: number) => {
    const todo = this.todos.find((todo) => todo.id == taskId);

    if (todo) todo?.isDone == 'undone' ? (todo.isDone = 'done') : (todo.isDone = 'undone');
  };
}
