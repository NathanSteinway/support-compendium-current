import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info } from '../services/interfaces/champ-info.service.interface'
import { ChampInfoService } from '../services/champ-info.service';

@Component({
  selector: 'app-champ-page-janna',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './champ-page-janna.component.html',
  styleUrl: './champ-page-janna.component.css'
})

export class ChampPageJannaComponent implements OnInit {

  info: Info = { champions: []};

  constructor(private champInfoService: ChampInfoService) {}

  ngOnInit(): void {
    this.champInfoService.getInfo().subscribe(data => {
      this.info = data;
    });
  }
  
  champName: any;
  spellType: any;
  champId: number = 1
  spellId: string = ''

  spellDetails: {spellId: string, spellIcon: string, spellName: string}[] = [
    {spellId: 'passive', spellIcon: '../../assets/spells/Janna_Tailwind.png', spellName: 'Tailwind'},
    {spellId: 'q', spellIcon: '../../assets/spells/Janna_Howling_Gale.png', spellName: 'Howling Gale'},
    {spellId: 'w', spellIcon: '../../assets/spells/Janna_Zephyr.png', spellName: 'Zephyr'},
    {spellId: 'e', spellIcon: '../../assets/spells/Janna_Eye_of_the_Storm.png', spellName: 'Eye of the Storm'},
    {spellId: 'r', spellIcon: '../../assets/spells/Janna_Monsoon.png', spellName: 'Monsoon'}
  ]

  showChampInfo(champId: number, spellId: string) {
    let champion = this.info.champions[champId]
    this.champName = champion?.name;
    this.spellType = champion?.spells[spellId]
  }
}
