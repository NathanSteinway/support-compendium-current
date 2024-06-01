import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import {Router} from '@angular/router'
import { ChampInfoService } from '../services/champ-info.service'
import { Info } from '../services/interfaces/champ-info.service.interface'

@Component({
  selector: 'app-champ-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './champ-select.component.html',
  styleUrl: './champ-select.component.css'
})
export class ChampSelectComponent implements OnInit {

  champions: any[] = [];
  square: any;

  constructor(
    private router: Router,
    private champInfoService: ChampInfoService
  ) {}

  ngOnInit(): void {
    this.champInfoService.getInfo().subscribe(data => {
      this.champions = data.champions
    })
  }

  navToChampPage(name: string) {
    this.router.navigate(['/champ-page', name])
  }

  info: Info | undefined;

}
