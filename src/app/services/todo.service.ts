import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../module/Todo";
import { Observable } from "rxjs/Observable";

const headers = new HttpHeaders().set("Content-Type", "application/json");
@Injectable()
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=8";

  constructor(private http: HttpClient) {}

  addToDo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, { headers });
  }

  toggleCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, { headers });
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, { headers });
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

    // return [
    //   {
    //     id: 1,
    //     title: "Todo 1",
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: "Todo two",
    //     completed: true,
    //   },
    //   {
    //     id: 3,
    //     title: "Todo three",
    //     completed: false,
    //   },
    // ];
  }
}
