import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  // Image Sources for Support Items

    supportItems = [
      "../../assets/items/Bloodsong_item_HD.webp",
      "../../assets/items/Celestial_Opposition_item_HD.webp",
      "../../assets/items/Solstice_Sleigh_item_HD.png",
      "../../assets/items/Dream_Maker_item_HD.webp",
      "../../assets/items/zazzaks_realmspike.png"
    ]

    legendaryItems = [
      "../../assets/items/Knights_Vow.png",
      "../../assets/items/Dawncore_item_HD.webp",
      "../../assets/items/shurelyas_battlesong.png",
      "../../assets/items/Echoes_of_Helia_item_HD.png",
      "../../assets/items/Redemption_item_HD.webp",
      "../../assets/items/youmoos_ghostblade.png",
      "../../assets/items/Imperial_Mandate_item.webp",
      "../../assets/items/Staff_of_Flowing_Water_item_HD.png",
      "../../assets/items/Umbral_Glaive_item_HD.webp",
      "../../assets/items/Mikaels_Blessing.png",
      "../../assets/items/Moonstone_Renewer_item_HD.webp",
      "../../assets/items/Locket_of_the_Iron_Solari_item_HD.webp",
      "../../assets/items/zekes_convergence.png"
    ]

  }
