import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectRoutingModule } from './collect-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { RecievablesComponent } from './recievables/recievables.component';
import { SharedModule } from '../shared/shared.module';
import { QuickcollectComponent } from './quickcollect/quickcollect.component';
import { BulkcollectsComponent } from './bulkcollects/bulkcollects.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    InvoicesComponent,
    RecievablesComponent,
    QuickcollectComponent,
    BulkcollectsComponent,
  ],
  imports: [
    DropdownModule,
    FormsModule,
    CommonModule,
    CollectRoutingModule,
    SharedModule
  ]
})
export class CollectModule { }
