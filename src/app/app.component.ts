import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ChampSelectComponent } from './champ-select/champ-select.component'
import { ChampPageComponent } from './champ-page/champ-page.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChampSelectComponent, ChampPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'support-compendium-curr';
}
