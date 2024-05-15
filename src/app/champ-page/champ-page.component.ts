import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ChampInfoService } from '../services/champ-info.service'
import { Info } from '../services/interfaces/champ-info.service.interface'

@Component({
  selector: 'app-champ-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './champ-page.component.html',
  styleUrl: './champ-page.component.css'
})
export class ChampPageComponent implements OnInit {

  constructor(private champInfoService: ChampInfoService) {}

  ngOnInit(): void {
    this.getChampInfo();
  }

  getChampInfo(): void {
    this.champInfoService.getInfo()
    .subscribe(data => {
      this.info = {...data}
    })
  }

  info: Info | undefined;
  
}
