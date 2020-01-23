import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchformComponent } from "./searchform/searchform.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  { path: "search", component: SearchformComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
