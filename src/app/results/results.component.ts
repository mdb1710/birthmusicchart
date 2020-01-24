import { Component, OnInit } from "@angular/core";

import { AngularBillboardService } from "angular-billboard";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.sass"]
})
export class ResultsComponent implements OnInit {
  charts: any = [];
  chartsOptions: any = [];

  constructor(private angularBillboardService: AngularBillboardService) {}

  ngOnInit() {
    this.chartsOptions = [
      {
        data: {
          type: "bar",
          columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 50],
            ["data3", 10, 80, 240, 35, 11, 70]
          ]
        },
        title: {
          text: "Bar"
        }
      }
    ];
    this.charts = this.angularBillboardService.generate(...this.chartsOptions);
  }
}
