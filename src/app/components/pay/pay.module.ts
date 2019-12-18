import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayablesComponent } from './payables/payables.component';
import { BillsComponent } from './bills/bills.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { BulktransferComponent } from './bulktransfer/bulktransfer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PayablesComponent,
    BillsComponent,
    FundtransferComponent,
    BulktransferComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    SharedModule
  ]
})
export class PayModule { }
