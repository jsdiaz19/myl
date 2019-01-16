import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { CheckComponent} from './check/check.component';
import { DescriptionDespachoComponent } from './description-despacho/description-despacho.component';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'Description',
    component: DescriptionDespachoComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'check/:id/:num',
    component: CheckComponent
  },
  

];
