import { Component, OnInit, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common'
import { ChampInfoService } from '../services/champ-info.service'
import { Info } from '../services/interfaces/champ-info.service.interface'
import { ActivatedRoute } from '@angular/router'
import { ScriptStoreService } from '../services/scriptstore.service'

@Component({
  selector: 'app-champ-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './champ-page.component.html',
  styleUrl: './champ-page.component.css'
})
export class ChampPageComponent implements OnInit {

  champion: any;
  spellActive: string = '';
  spellPassive: string = '';
  splashArt: string = '';

  // lastClicked starts null to mimick an "neutral" state that shows the button hasn't been clicked yet.
  lastClicked: string | null = null;

  isTextVisible: boolean=false
  
  constructor(
    private route: ActivatedRoute,
    private champInfoService: ChampInfoService,
    private scriptStoreService: ScriptStoreService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const championName = params.get('name');
      this.champInfoService.getInfo().subscribe(data => {
        this.champion = data.champions.find((champ: any) => champ.name === championName);
        this.splashArt = this.champion.bg
      });
    });

    this.scriptStoreService.shyElement$.subscribe(isVisible => {
      this.isTextVisible = isVisible;
    });

  }

  // hideToggle takes event as arg, classified as Event interface
  hideToggle(event: Event): void {

    // target set equal to the HTMLElement that event is targeting
    const target = event.target as HTMLElement;
    // sets button equal to the closest "button" HTMLElement
    const button = target.closest('button');

    if (button) {

      // this uses the .find() js method to find the item in champion.spells with an id that matches the spellId (button's id)
      const spellId = button.id;
      const spell = this.champion.spells.find((item: { id: string; }) => item.id === spellId)
        
      if (spell) {
          // sets the "active" and "passive" entries of each item equal to a variable to be referenced in the template
        this.spellActive = spell.active
        this.spellPassive = spell.passive

        if (this.spellActive !== undefined) {
          console.log(this.spellActive)
        }

        if (this.spellPassive !== undefined) {
          console.log(this.spellPassive)
        }
      }
    }
  }

  info: Info | undefined;
  
}
