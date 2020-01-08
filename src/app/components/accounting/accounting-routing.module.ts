import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfitComponent } from './reports/profit/profit.component';
import { BalanceSheetComponent } from './reports/balance-sheet/balance-sheet.component';
import { GeneralComponent } from './reports/general/general.component';
import { TrialbalanceComponent } from './reports/trialbalance/trialbalance.component';


const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  {
    path: 'reports', component: ReportsComponent, children: [
      {path: 'profit-and-loss', component: ProfitComponent},
      {path: 'balance-sheet', component: BalanceSheetComponent},
      {path: 'general-ledger', component: GeneralComponent},
      {path: 'trial-balance', component: TrialbalanceComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
