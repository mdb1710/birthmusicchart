import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

export interface Date {
  birthDate: string;
}

export interface Charts {
  total: number;
  results: Array<object>;
}

@Injectable({
  providedIn: "root"
})
export class BillboardService {
  uri = "http://localhost:8000/api";

  charts: Charts;

  constructor(private http: HttpClient) {}

  getBirthChart(date: any) {
    return this.http.get<any>(`${this.uri}/charts/?date=${date}`);
  }
}
