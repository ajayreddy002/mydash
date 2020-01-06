import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { SharedModule } from '../shared/shared.module';
import { AdddialogComponent } from './transactions/adddialog/adddialog.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    AdddialogComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AdddialogComponent
  ]
})
export class AccountingModule { }
