import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenderComponent } from './lender.component';
import { LenderdetailsComponent } from './lenderdetails/lenderdetails.component';


const routes: Routes = [
  {path: '', component: LenderComponent},
  {path: 'len-details', component: LenderdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule { }
