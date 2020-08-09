import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "../../module/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}
  //set dynamit classes
  setClasses() {
    let classes = {
      todo: true,
      "is-completed": this.todo.completed,
    };
    return classes;
  }

  onToggle(todo: Todo) {
    //console.log("toggle");
    // toggle in UI
    todo.completed = !todo.completed;
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log("completed", todo);
    });
  }

  onDelete(todo: Todo) {
    //console.log("delete");
    this.deleteTodoEvent.emit(todo);
  }
}
