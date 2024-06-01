import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ChampInfoService } from '../services/champ-info.service'
import { Info } from '../services/interfaces/champ-info.service.interface'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-champ-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './champ-page.component.html',
  styleUrl: './champ-page.component.css'
})
export class ChampPageComponent implements OnInit {

  champion: any;
  
  constructor(
    private route: ActivatedRoute,
    private champInfoService: ChampInfoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const championName = params.get('name');
      this.champInfoService.getInfo().subscribe(data => {
        this.champion = data.champions.find((champ: any) => champ.name === championName);
      });
    });
  }

  info: Info | undefined;
  
}
