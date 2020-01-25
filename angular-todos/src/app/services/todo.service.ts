import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get todos from json placeholder
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }
  // Toggle completed on mock server
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
  // Delete todo from mock server
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions);
  }
}
