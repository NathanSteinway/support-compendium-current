import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-champ-select',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './champ-select.component.html',
  styleUrl: './champ-select.component.css'
})
export class ChampSelectComponent {

}
