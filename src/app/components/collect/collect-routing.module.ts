import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecievablesComponent } from './recievables/recievables.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { QuickcollectComponent } from './quickcollect/quickcollect.component';
import { BulkcollectsComponent } from './bulkcollects/bulkcollects.component';
import { DetailsComponent } from './recievables/details/details.component';


const routes: Routes = [
  { path: 'receive', component: RecievablesComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'quick-collects', component: QuickcollectComponent },
  { path: 'bulk-collects', component: BulkcollectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectRoutingModule { }
