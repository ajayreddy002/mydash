import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfitComponent } from './reports/profit/profit.component';


const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  {
    path: 'reports', component: ReportsComponent, children: [
      {path: 'profit-and-loss', component: ProfitComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
