import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecievablesComponent } from './recievables.component';


const routes: Routes = [
  {path: 'receive', component: RecievablesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecievablesRoutingModule { }
