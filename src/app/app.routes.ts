import { Routes } from '@angular/router';
import { HomepageWrapperComponent } from './homepage-wrapper/homepage-wrapper.component'
import { VisionComponent } from './vision/vision.component'
import { ItemsComponent } from './items/items.component'
import { ChampPageComponent } from './champ-page/champ-page.component';

export const routes: Routes = [
    {path: '', component: HomepageWrapperComponent },
    {path: 'vision-guide', component: VisionComponent},
    {path: 'items-guide', component: ItemsComponent},
    {path: 'champ-page', component: ChampPageComponent},
    {path: 'champ-page/:name', component: ChampPageComponent}

];


