import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ScriptStoreService {

  constructor() { }

  private shyElement = new BehaviorSubject<boolean>(false);
  shyElement$ = this.shyElement.asObservable();

  toggleVisibility() {
    this.shyElement.next(!this.shyElement.value)
  }
  
}
