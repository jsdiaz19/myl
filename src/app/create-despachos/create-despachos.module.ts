import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateDespachoComponent } from './create-despachos.component';
import { StarterRoutes } from './create-despachos.routing';
import { DialogComponent } from '../material-component/dialog/dialog.component';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,

    RouterModule.forChild(StarterRoutes)
  ],
  declarations: [CreateDespachoComponent,DialogComponent],
  entryComponents: [
    DialogComponent,
  ]
})
export class StarterModule {}
