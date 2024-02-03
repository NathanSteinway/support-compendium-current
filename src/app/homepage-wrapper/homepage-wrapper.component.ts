import { Component } from '@angular/core';

import { ChampSelectComponent } from '../champ-select/champ-select.component'
import { GuidesComponent } from '../guides/guides.component'

@Component({
  selector: 'app-homepage-wrapper',
  standalone: true,
  imports: [ ChampSelectComponent, GuidesComponent ],
  templateUrl: './homepage-wrapper.component.html',
  styleUrl: './homepage-wrapper.component.css'
})
export class HomepageWrapperComponent {

}
