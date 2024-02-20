import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Info {
  champions: any;
}

@Injectable({
  providedIn: 'root'
})

export class ChampInfoService {

  infoURL = '../assets/champData.json'

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<Info>(
      this.infoURL
    )

  }

}
