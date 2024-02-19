import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { NavComponent } from './nav/nav.component'
import { HomepageWrapperComponent } from './homepage-wrapper/homepage-wrapper.component'
  // import { ChampSelectComponent } from './champ-select/champ-select.component'
  // import { GuidesComponent } from './guides/guides.component'
import { ChampPageRakanComponent } from './champ-page-rakan/champ-page-rakan.component'
import { ChampPageJannaComponent} from './champ-page-janna/champ-page-janna.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavComponent, HomepageWrapperComponent, ChampPageRakanComponent, ChampPageJannaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'support-compendium-curr';

}
