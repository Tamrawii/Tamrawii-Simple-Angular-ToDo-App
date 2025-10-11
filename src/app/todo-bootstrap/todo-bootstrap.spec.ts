import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBootstrap } from './todo-bootstrap';

describe('TodoBootstrap', () => {
  let component: TodoBootstrap;
  let fixture: ComponentFixture<TodoBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
