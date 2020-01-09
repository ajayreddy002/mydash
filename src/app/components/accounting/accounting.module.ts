import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { SharedModule } from '../shared/shared.module';
import { AdddialogComponent } from './transactions/adddialog/adddialog.component';
import { ReportsComponent } from './reports/reports.component';
import { NavHeaderComponent } from './reports/nav-header/nav-header.component';
import { ProfitComponent } from './reports/profit/profit.component';
import { TrialbalanceComponent } from './reports/trialbalance/trialbalance.component';
import { BalanceSheetComponent } from './reports/balance-sheet/balance-sheet.component';
import { GeneralComponent } from './reports/general/general.component';
import { ChartOfAcComponent } from './chart-of-ac/chart-of-ac.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    AdddialogComponent,
    ReportsComponent,
    NavHeaderComponent,
    ProfitComponent,
    TrialbalanceComponent,
    BalanceSheetComponent,
    GeneralComponent,
    ChartOfAcComponent
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
