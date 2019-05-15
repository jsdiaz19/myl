import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ViewdespachosComponent } from './view-despachos/view-despachos.component';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { CheckDespachoComponent } from './check-despachos/check-despachos.component';
import { DescriptionDespachoComponent } from './description-despacho/description-despacho.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { LowSalesProductComponent } from './low-sales-product/low-sales-product.component';
import { ReportStoreComponent } from './report-store/report-store.component';
import { DialogAnomalyComponent } from './dialog-anomaly/dialog-anomaly.component';
import { BudgetGoalComponent } from './budget-goal/budget-goal.component';
import { CostEffectivenessComponent } from './cost-effectiveness/cost-effectiveness.component';
import { BalanceComponent } from './balance/balance.component';
import { ViewReportComponent } from './view-report/view-report.component';
import {DialogReportComponent} from './report-store/dialog-report/dialog-report.component';
import { SchedulesComponent } from './report-store/schedules/schedules.component';
import { NewUserComponent } from './report-store/schedules/new-user/new-user.component';
import { RosterComponent } from './roster/roster.component';
import { DeclarationImportComponent } from './declaration-import/declaration-import.component';
import { ViewDeclarationComponent } from './view-declaration/view-declaration.component';
import { SettlementComponent } from './settlement/settlement.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ViewdespachosComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    CheckDespachoComponent,
    DescriptionDespachoComponent,
    UploadCsvComponent,
    BudgetDetailComponent,
    LowSalesProductComponent,
    ReportStoreComponent,
    DialogAnomalyComponent,
    BudgetGoalComponent,
    CostEffectivenessComponent,
    BalanceComponent,
    ViewReportComponent,
    DialogReportComponent,
    SchedulesComponent,
    NewUserComponent,
    RosterComponent,
    DeclarationImportComponent,
    ViewDeclarationComponent,
    SettlementComponent
  ],
  entryComponents: [
    DialogAnomalyComponent,
    DialogReportComponent,
    NewUserComponent
  ]
 
})
export class MaterialComponentsModule {}
