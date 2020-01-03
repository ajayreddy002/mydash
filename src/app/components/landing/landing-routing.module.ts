import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ContactComponent } from '../contact/contact.component';
import { AddcontactComponent } from '../contact/addcontact/addcontact.component';


const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule) },
      { path: 'collect', loadChildren: () => import('../collect/collect.module').then(mod => mod.CollectModule) },
      { path: 'pay', loadChildren: () => import('../pay/pay.module').then(mod => mod.PayModule) },
      {path: 'contact', component: ContactComponent},
      {path: 'addcontact', component: AddcontactComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
