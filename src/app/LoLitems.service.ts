import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Items {
  supportItems: any[]
  legendaryItems: any[]
}

@Injectable({
  providedIn: 'root'
})


export class LoLItemsService {

  infoURL = '../assets/itemData.json'

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<Items>(
      this.infoURL
    )

  }
}
