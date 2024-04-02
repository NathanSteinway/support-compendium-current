import { Routes } from '@angular/router';
import { HomepageWrapperComponent } from './homepage-wrapper/homepage-wrapper.component'
import { VisionComponent } from './vision/vision.component'
import { ItemsComponent } from './items/items.component'
import { ChampPageRakanComponent } from './champ-page-rakan/champ-page-rakan.component';
import { ChampPageJannaComponent } from './champ-page-janna/champ-page-janna.component';
import { ChampPageMaokaiComponent } from './champ-page-maokai/champ-page-maokai.component';

export const routes: Routes = [
    {path: '', component: HomepageWrapperComponent },
    {path: 'vision-guide', component: VisionComponent},
    {path: 'items-guide', component: ItemsComponent},
    {path: 'rakan-page', component: ChampPageRakanComponent},
    {path: 'janna-page', component: ChampPageJannaComponent},
    {path: 'maokai-page', component: ChampPageMaokaiComponent}

];


