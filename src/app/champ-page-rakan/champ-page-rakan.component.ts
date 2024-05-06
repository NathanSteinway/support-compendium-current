import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampInfoService } from '../services/champ-info.service';
import { Info } from '../services/interfaces/champ-info.service.interface';
import { DetailSliderComponent } from '../detail-slider/detail-slider.component'

@Component({
  selector: 'app-champ-page-rakan',
  standalone: true,
  imports: [CommonModule, DetailSliderComponent],
  templateUrl: './champ-page-rakan.component.html',
  styleUrl: './champ-page-rakan.component.css'
})

export class ChampPageRakanComponent implements OnInit{

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
  champId: number = 0
  spellId: string = ''

  spellDetails: {spellId: string, spellIcon: string, spellName: string}[] = [
    {spellId: 'passive_1', spellIcon: '../../assets/spells/Fey_Feathers.png', spellName: 'Fey Feathers'},
    {spellId: 'passive_2', spellIcon: '../../assets/spells/Lovers_Leap.png', spellName: "Lover's Leap"},
    {spellId: 'q', spellIcon: '../../assets/spells/Gleaming_Quill.png', spellName: 'Gleaming Quill'},
    {spellId: 'w', spellIcon: '../../assets/spells/Grand_Entrance.png', spellName: 'Grand Entrance'},
    {spellId: 'e', spellIcon: '../../assets/spells/Battle_Dance.png', spellName: 'Battle Dance'},
    {spellId: 'r', spellIcon: '../../assets/spells/The_Quickness.png', spellName: 'The Quickness'}
  ]

  showChampInfo(champId: number, spellId: string) {
    let champion = this.info?.champions[champId]
    this.champName = champion
    this.spellType = champion?.spells[spellId]
    console.log(this.spellType)
  }
}
