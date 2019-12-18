import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayablesComponent } from './payables/payables.component';
import { BulktransferComponent } from './bulktransfer/bulktransfer.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { BillsComponent } from './bills/bills.component';


const routes: Routes = [
  { path: 'send', component: PayablesComponent },
  { path: 'send-bills', component: BillsComponent },
  { path: 'payments', component: FundtransferComponent },
  { path: 'bulk-transfer', component: BulktransferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule { }
