import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectRoutingModule } from './collect-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { RecievablesComponent } from './recievables/recievables.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    RecievablesComponent
  ],
  imports: [
    CommonModule,
    CollectRoutingModule
  ]
})
export class CollectModule { }
