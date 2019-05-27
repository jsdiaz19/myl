import { Routes } from '@angular/router';
import {AuthGuardService} from '../service/AuthGuard/auth-guard.service';
import { ViewdespachosComponent } from './view-despachos/view-despachos.component';
import { ListsComponent } from './lists/lists.component';
import { CheckDespachoComponent} from './check-despachos/check-despachos.component';
import { DescriptionDespachoComponent } from './description-despacho/description-despacho.component';
import { UploadCsvComponent} from './upload-csv/upload-csv.component';
import {BudgetDetailComponent} from './budget-detail/budget-detail.component';
import {LowSalesProductComponent} from './low-sales-product/low-sales-product.component';
import {ReportStoreComponent} from './report-store/report-store.component';
import {BudgetGoalComponent} from './budget-goal/budget-goal.component';
import {CostEffectivenessComponent} from './cost-effectiveness/cost-effectiveness.component';
import {BalanceComponent} from './balance/balance.component';
import {ViewReportComponent} from './view-report/view-report.component';
import {SchedulesComponent} from './report-store/schedules/schedules.component';
import {RosterComponent} from './roster/roster.component';
import {DeclarationImportComponent} from './declaration-import/declaration-import.component'
import {ViewDeclarationComponent} from './view-declaration/view-declaration.component';
import {SettlementComponent} from './settlement/settlement.component';

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
  },
  {
    path: 'goal',
    component: BudgetGoalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cost',
    component: CostEffectivenessComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    component: BalanceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reportStore/:co/:date',
    component: ViewReportComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'schedules/:date',
    component: SchedulesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'control',
    component: RosterComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'import',
    component: DeclarationImportComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'download',
    component: ViewDeclarationComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'settlement',
    component: SettlementComponent,
    canActivate: [AuthGuardService]
  },
];
