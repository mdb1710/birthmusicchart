import { Component, OnInit } from "@angular/core";

import { BillboardService, Charts } from "../billboard.service";

import { RouterModule } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.sass"]
})
export class ResultsComponent implements OnInit {
  chartResults: Charts[] = [];

  constructor(private billboardService: BillboardService) {}

  ngOnInit() {}
}
