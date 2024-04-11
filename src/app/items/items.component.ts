import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service'
import { Item } from '../services/interfaces/item.interface'

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  orderedCategories: {key: string, value: Item[]}[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.orderedCategories = [
          { key: 'Support Items', value: data['Support Items'] || [] },
          { key: 'Legendary Items', value: data['Legendary Items'] || [] }
        ];
      }
    })
  }
}
