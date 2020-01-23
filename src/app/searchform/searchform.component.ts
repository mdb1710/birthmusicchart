import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-searchform",
  templateUrl: "./searchform.component.html",
  styleUrls: ["./searchform.component.sass"]
})
export class SearchformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  firstName = new FormControl("");
  birthDate = new FormControl("");
}
