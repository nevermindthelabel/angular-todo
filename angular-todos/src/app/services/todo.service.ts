import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return [
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
