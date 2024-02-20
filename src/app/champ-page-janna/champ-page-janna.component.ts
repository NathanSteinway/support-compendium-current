import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info, ChampInfoService } from '../champ-info.service';

@Component({
  selector: 'app-champ-page-janna',
  standalone: true,
  imports: [CommonModule],
  providers: [ ChampInfoService ],
  templateUrl: './champ-page-janna.component.html',
  styleUrl: './champ-page-janna.component.css'
})
export class ChampPageJannaComponent {

  error: any;
  headers: string[] = [];
  info: Info | undefined;

  champName: any;
  spellType: any;

  constructor(private champInfoService: ChampInfoService) {}


  clear() {
    this.info = undefined;
    this.error = undefined;
    this.headers = [];
  }

  showChampInfo(champId: number, spellId: string) {

    this.champInfoService.getInfo()
      .subscribe(data => {
        
        this.info = { ...data };

        let champion = this.info.champions[champId]
        let spell = champion.spells[spellId]

        this.champName = champion
        this.spellType = spell
        
      });
        
    
  }
}
