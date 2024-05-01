import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LoLItemsService, Items } from '../LoLlitems.service'

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: Items | undefined

  constructor(private lolItemsService: LoLItemsService) {}

  ngOnInit(): void {
    this.getItemInfo();
  }

  getItemInfo(): void {
    this.lolItemsService.getInfo()
    .subscribe((data: Items) => {
      
      this.items = data;
      console.log(this.items);
      
    });
  }



}
