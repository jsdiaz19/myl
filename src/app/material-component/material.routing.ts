import { Routes } from '@angular/router';

import { ViewdespachosComponent } from './view-despachos/view-despachos.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { CheckDespachoComponent} from './check-despachos/check-despachos.component';
import { DescriptionDespachoComponent } from './description-despacho/description-despacho.component';
import { UploadCsvComponent} from './upload-csv/upload-csv.component';
import {BudgetDetailComponent} from './budget-detail/budget-detail.component';

export const MaterialRoutes: Routes = [
  {
    path: 'view',
    component: ViewdespachosComponent
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
    component: CheckDespachoComponent
  },
  {
    path: 'upload',
    component: UploadCsvComponent
  },
  {
    path: 'detail',
    component: BudgetDetailComponent
  }

];
