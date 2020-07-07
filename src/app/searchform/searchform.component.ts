import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BillboardService, Date } from "../billboard.service";
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: "app-searchform",
  templateUrl: "./searchform.component.html",
  styleUrls: ["./searchform.component.sass"]
})
export class SearchformComponent implements OnInit {
  // firstName = new FormControl("");
  // birthDate = new FormControl("");

  birthCharts;

  chartSearch = new FormGroup({
    firstName: new FormControl(""),
    birthDate: new FormControl("")
  });

  newUser: String;
  newDate: String;
  testDate: String;
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
    this.billboardService.getBirthChart(this.newDate).subscribe(data => {
      this.birthCharts = data;
      console.log(this.birthCharts);
      
    });
  }
}
