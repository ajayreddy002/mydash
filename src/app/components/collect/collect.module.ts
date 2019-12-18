import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectRoutingModule } from './collect-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { RecievablesComponent } from './recievables/recievables.component';
import { SharedModule } from '../shared/shared.module';
import { QuickcollectComponent } from './quickcollect/quickcollect.component';
import { BulkcollectsComponent } from './bulkcollects/bulkcollects.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    RecievablesComponent,
    QuickcollectComponent,
    BulkcollectsComponent
  ],
  imports: [
    CommonModule,
    CollectRoutingModule,
    SharedModule
  ]
})
export class CollectModule { }
