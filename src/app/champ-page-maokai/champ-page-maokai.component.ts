import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info } from '../services/interfaces/champ-info.service.interface';
import { ChampInfoService} from '../services/champ-info.service';

@Component({
  selector: 'app-champ-page-maokai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './champ-page-maokai.component.html',
  styleUrl: './champ-page-maokai.component.css'
})
export class ChampPageMaokaiComponent {

  constructor(private champInfoService: ChampInfoService) {}

  ngOnInit(): void {
    this.getChampInfo();
  }

  getChampInfo(): void {
    this.champInfoService.getInfo()
    .subscribe(data => {
      
      this.info = { ...data };
      
    });
  }

  info: Info | undefined;

  champName: any;
  spellType: any;
  champId: number = 2
  spellId: string = ''

  spellDetails: {spellId: string, spellIcon: string, spellName: string}[] = [
    {spellId: 'passive', spellIcon: '../../assets/spells/Sap_Magic.png', spellName: 'Sap Magic'},
    {spellId: 'q', spellIcon: '../../assets/spells/Bramble_Smash.png', spellName: 'Bramble Smash'},
    {spellId: 'w', spellIcon: '../../assets/spells/Twisted_Advance.png', spellName: 'Twisted Advance'},
    {spellId: 'e', spellIcon: '../../assets/spells/Sapling_Toss.png', spellName: 'Sapling Toss'},
    {spellId: 'r', spellIcon: "../../assets/spells/Nature's_Grasp.png", spellName: "Nature's Grasp"}
  ]

  showChampInfo(champId: number, spellId: string) {
    let champion = this.info?.champions[champId]
    this.champName = champion
    this.spellType = champion?.spells[spellId]
  }
}
