import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: "root"
})
export class BillboardService {

  uri = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getBirthChart(date) {
    return this.http.get(`${this.uri}/charts`, date)
  };


}
