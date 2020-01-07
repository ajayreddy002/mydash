import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { SharedModule } from '../shared/shared.module';
import { AdddialogComponent } from './transactions/adddialog/adddialog.component';
import { ReportsComponent } from './reports/reports.component';
import { NavHeaderComponent } from './reports/nav-header/nav-header.component';
import { ProfitComponent } from './reports/profit/profit.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    AdddialogComponent,
    ReportsComponent,
    NavHeaderComponent,
    ProfitComponent
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
