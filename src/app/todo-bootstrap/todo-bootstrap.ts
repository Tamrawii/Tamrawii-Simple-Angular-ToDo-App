import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from '../add-task/add-task';
import { EditTask } from '../edit-task/edit-task';

@Component({
  selector: 'app-todo-bootstrap',
  imports: [FormsModule, CommonModule, AddTask, EditTask],
  templateUrl: './todo-bootstrap.html',
  styleUrl: './todo-bootstrap.css',
})
export class TodoBootstrap {
  todos = [
    { id: 1, task: 'Présenter les composants Angular', isDone: 'done' },
    { id: 2, task: 'Présenter les mécanismes de binding', isDone: 'undone' },
    { id: 3, task: 'Introduction aux directives', isDone: 'done' },
  ];

  action: string = '';
  selectedTask: { id: number; task: string; isDone: string } = {
    id: 0,
    task: '',
    isDone: 'undone',
  };

  setAction(newAction: string) {
    this.action = newAction;
  }

  addTask(newTask: string) {
    const task = { id: this.todos[this.todos.length - 1].id + 1, task: newTask, isDone: 'undone' };

    // More optimized
    this.todos = [...this.todos, task];
    this.setAction('');
  }

  getTask(taskId: number) {
    this.selectedTask = {
      ...(this.todos.find((todo) => todo.id === taskId) as {
        id: number;
        task: string;
        isDone: string;
      }),
    };
    this.setAction('modif');
  }

  updateTask(taskId: number, newTask: string, newState: string) {
    this.selectedTask.task = newTask;

    this.selectedTask.isDone = newState;
    this.todos[this.todos.findIndex((todo) => todo.id == taskId)] = this.selectedTask;
  }

  deleteTask(taskId: number) {
    this.todos = this.todos.filter((todo) => todo.id != taskId);
  }
}
