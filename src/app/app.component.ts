import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { ChampSelectComponent } from './champ-select/champ-select.component'
import { ChampPageRakanComponent } from './champ-page-rakan/champ-page-rakan.component'
import { ChampPageJannaComponent} from './champ-page-janna/champ-page-janna.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ChampSelectComponent, ChampPageRakanComponent, ChampPageJannaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'support-compendium-curr';
}
