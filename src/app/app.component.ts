import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NavComponent } from './nav/nav.component'
import { HomepageWrapperComponent } from './homepage-wrapper/homepage-wrapper.component'
import { VisionComponent } from './vision/vision.component'
import { ItemsComponent } from './items/items.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavComponent, HomepageWrapperComponent, VisionComponent, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'support-compendium-curr';

}
