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
import { DetailsComponent } from './recievables/details/details.component';
import { CustomerdialogComponent } from './invoices/customerdialog/customerdialog.component';
import { ReconcileComponent } from './invoices/reconcile/reconcile.component';
import { NewinvoiceComponent } from './invoices/newinvoice/newinvoice.component';
import { AdditemComponent } from './invoices/additem/additem.component';
@NgModule({
  declarations: [
    InvoicesComponent,
    RecievablesComponent,
    QuickcollectComponent,
    BulkcollectsComponent,
    DetailsComponent,
    CustomerdialogComponent,
    ReconcileComponent,
    NewinvoiceComponent,
    AdditemComponent
  ],
  imports: [
    DropdownModule,
    FormsModule,
    CommonModule,
    CollectRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CustomerdialogComponent,
    ReconcileComponent,
    AdditemComponent
  ]
})
export class CollectModule { }
