import { Component, OnInit } from "@angular/core";
import { Todo } from "../../module/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodoInParent(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id); //quick response in UI
    this.todoService.deleteTodo(todo).subscribe(() => {
      // this.todos = this.todos.filter((t) => t.id !== todo.id);//slow response in UI
      console.log("delete todo:", todo);
    });
  }

  addTodoInParent(todo: Todo) {
    this.todoService.addToDo(todo).subscribe((todo) => {
      console.log("add todo:", todo);
      todo = { ...todo, id: this.todos.length + 1 };
      console.log("modified add todo Id:", todo);
      this.todos.push(todo);
    });
  }
}
