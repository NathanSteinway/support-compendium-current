import { Component } from '@angular/core';
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

  constructor(private champInfoService: ChampInfoService) {}


  clear() {
    this.info = undefined;
    this.error = undefined;
    this.headers = [];
  }

  

  showChampInfo() {

    this.champInfoService.getInfo()
      .subscribe(data => {
        
        this.info = { ...data };

        let champion = this.info.champions[0]

        console.log(champion.spells.q.info.active);
      });
        
      
  }
}
