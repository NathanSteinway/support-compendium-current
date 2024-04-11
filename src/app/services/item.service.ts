import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ItemCategories } from './interfaces/item.interface'

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  itemURL = '../assets/itemData.json'

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemCategories> {
    return this.http.get<ItemCategories>(this.itemURL)
  }

}
