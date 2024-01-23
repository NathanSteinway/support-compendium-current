import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ChampSelectComponent } from './champ-select/champ-select.component'
import { ChampPageRakanComponent } from './champ-page-rakan/champ-page-rakan.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChampSelectComponent, ChampPageRakanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'support-compendium-curr';
}
