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
    
  ],
 
})
export class MaterialComponentsModule {}
