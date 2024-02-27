import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info, ChampInfoService } from '../champ-info.service';

@Component({
  selector: 'app-champ-page-janna',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './champ-page-janna.component.html',
  styleUrl: './champ-page-janna.component.css'
})

export class ChampPageJannaComponent implements OnInit {

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
  champId: number = 1
  spellId: string = ''

  spellDetails: {spellId: string, spellIcon: string, spellName: string}[] = [
    {spellId: 'passive', spellIcon: '../../assets/Janna_Tailwind.png', spellName: 'Tailwind'},
    {spellId: 'q', spellIcon: '../../assets/Janna_Howling_Gale.png', spellName: 'Howling Gale'},
    {spellId: 'w', spellIcon: '../../assets/Janna_Zephyr.png', spellName: 'Zephyr'},
    {spellId: 'e', spellIcon: '../../assets/Janna_Eye_of_the_Storm.png', spellName: 'Eye of the Storm'},
    {spellId: 'r', spellIcon: '../../assets/Janna_Monsoon.png', spellName: 'Monsoon'}
  ]

  showChampInfo(champId: number, spellId: string) {
    let champion = this.info?.champions[champId]
    this.champName = champion
    this.spellType = champion?.spells[spellId]
  }
}
