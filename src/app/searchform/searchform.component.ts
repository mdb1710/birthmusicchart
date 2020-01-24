import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-searchform",
  templateUrl: "./searchform.component.html",
  styleUrls: ["./searchform.component.sass"]
})
export class SearchformComponent implements OnInit {
  // firstName = new FormControl("");
  // birthDate = new FormControl("");

  chartSearch = new FormGroup({
    firstName: new FormControl(""),
    birthDate: new FormControl("")
  });

  newUser = this.chartSearch.value.firstName;
  newDate = this.chartSearch.value.birthDate;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.chartSearch.value, this.newUser, this.newDate);
  }
}
