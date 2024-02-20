import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Info {
  infoURL: "api/champInfo",
  textfile: "../assets/champData.json",
  date: "2024-02-19"
}
@Injectable({
  providedIn: 'root'
})
export class ChampInfoService {

  constructor(private http: HttpClient) { }

  infoUrl = '../assets/champData.json';

  getInfo() {
    return this.http.get<Info>(this.infoUrl);
  }
}
