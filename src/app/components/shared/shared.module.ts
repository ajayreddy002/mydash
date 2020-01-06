import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule, MatIconModule,
   MatToolbarModule,
   MatListModule,
   MatButtonModule,
   MatMenuModule,
   MatFormFieldModule,
   MatOptionModule,
   MatSelectModule,
   MatTooltipModule,
   MatDividerModule,
   MatTableModule,
   MatSortModule,
   MatPaginatorModule,
   MatCheckboxModule,
   MatExpansionModule,
   MatDialogModule} from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { AddcontactComponent } from '../contact/addcontact/addcontact.component';

@NgModule({
  declarations: [SidenavComponent, ContactComponent, AddcontactComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    MatDividerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    SidenavComponent,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ContactComponent,
    AddcontactComponent,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class SharedModule { }
