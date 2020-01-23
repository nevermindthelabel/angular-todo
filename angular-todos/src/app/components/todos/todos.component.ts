import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'todo 2',
        completed: true
      },
      {
        id: 3,
        title: 'todo 3',
        completed: false
      },
      {
        id: 4,
        title: 'todo 4',
        completed: false
      }
    ]
  }

}
