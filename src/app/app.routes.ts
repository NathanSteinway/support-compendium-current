import { Routes } from '@angular/router';
import { ChampSelectComponent } from './champ-select/champ-select.component';
import { ChampPageRakanComponent } from './champ-page-rakan/champ-page-rakan.component';
import { ChampPageJannaComponent } from './champ-page-janna/champ-page-janna.component';

export const routes: Routes = [
    {path: '', component: ChampSelectComponent},
    {path: 'rakan-page', component: ChampPageRakanComponent},
    {path: 'janna-page', component: ChampPageJannaComponent}
];


