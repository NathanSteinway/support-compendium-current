import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from './interfaces/champ-info.service.interface';

@Injectable({
  providedIn: 'root'
})

export class ChampInfoService {

  infoURL = '../assets/dataSheets/champData.json'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info> {
    return this.http.get<Info>(
      this.infoURL
    )
  }

}


