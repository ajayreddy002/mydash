import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecievablesComponent } from './recievables/recievables.component';
import { InvoicesComponent } from './invoices/invoices.component';


const routes: Routes = [
  { path: 'receive', component: RecievablesComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'quick', component: InvoicesComponent },
  { path: 'bulk', component: InvoicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectRoutingModule { }
