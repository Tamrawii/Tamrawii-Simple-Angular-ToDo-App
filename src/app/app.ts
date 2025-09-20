import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Todo } from "./todo/todo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Todo],
  templateUrl: './app.html',
  // template: '<h1>App Componenet</h1>',
  //   // inline template, we use it when the componenet needs only a few html code so it doesn't need a hole page
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('world');
}
