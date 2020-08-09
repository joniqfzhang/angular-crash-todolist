import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name: string = "Hi";
  constructor() {
    this.changeName("Joni");
  }

  changeName(name: string): void {
    this.name = name;
  }
}
