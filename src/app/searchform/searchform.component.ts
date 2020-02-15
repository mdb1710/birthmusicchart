import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BillboardService } from "../billboard.service";

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
  constructor(private billboardService: BillboardService) {}

  ngOnInit() {}

  onSubmit() {
    this.newUser = this.chartSearch.value.firstName;
    this.newDate = this.chartSearch.value.birthDate;
    console.log(
      this.chartSearch.value,
      this.newUser,
      this.newDate,
      this.chartSearch.value.firstName
    );
    let results = this.billboardService.getBirthChart();

    console.log("results are", results);
  }
}
