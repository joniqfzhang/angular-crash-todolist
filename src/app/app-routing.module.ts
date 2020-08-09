import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "./components/todos/todos.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  { path: "", component: TodosComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
