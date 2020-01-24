import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchformComponent } from "./searchform/searchform.component";
import { ResultsComponent } from "./results/results.component";

import { AngularBillboardModule } from "angular-billboard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchformComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularBillboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
