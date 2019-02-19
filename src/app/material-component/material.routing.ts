import { Routes } from '@angular/router';
import {AuthGuardService} from '../service/AuthGuard/auth-guard.service';
import { ViewdespachosComponent } from './view-despachos/view-despachos.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { CheckDespachoComponent} from './check-despachos/check-despachos.component';
import { DescriptionDespachoComponent } from './description-despacho/description-despacho.component';
import { UploadCsvComponent} from './upload-csv/upload-csv.component';
import {BudgetDetailComponent} from './budget-detail/budget-detail.component';
import {LowSalesProductComponent} from './low-sales-product/low-sales-product.component';
import {ReportStoreComponent} from './report-store/report-store.component';
export const MaterialRoutes: Routes = [
  {
    path: 'view',
    component: ViewdespachosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'Description',
    component: DescriptionDespachoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'grid',
    component: GridComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'lists',
    component: ListsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'check/:id/:num',
    component: CheckDespachoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'report',
    component: ReportStoreComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'upload',
    component: UploadCsvComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'detail',
    component: BudgetDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product',
    component: LowSalesProductComponent,
    canActivate: [AuthGuardService]
  }
];
