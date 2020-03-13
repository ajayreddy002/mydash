import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesdashboardComponent } from './salesdashboard.component';


const routes: Routes = [
  {path: '', component: SalesdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesdashboardRoutingModule { }
