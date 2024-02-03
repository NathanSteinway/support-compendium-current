import { Component } from '@angular/core';

@Component({
  selector: 'app-champ-page-janna',
  standalone: true,
  imports: [],
  templateUrl: './champ-page-janna.component.html',
  styleUrl: './champ-page-janna.component.css'
})
export class ChampPageJannaComponent {
  spellInfo(): void {
    console.log('BOOM!')
  }
}
