import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesdashboardRoutingModule } from './salesdashboard-routing.module';
import { SalesdashboardComponent } from './salesdashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SalesdashboardComponent],
  imports: [
    CommonModule,
    SalesdashboardRoutingModule,
    SharedModule
  ]
})
export class SalesdashboardModule { }
