import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  MatSidenavModule, MatIconModule,
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
  MatDialogModule
} from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { AddcontactComponent } from '../contact/addcontact/addcontact.component';
import { ChartModule } from 'primeng/chart';
import {TableModule} from 'primeng/table';
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
    MatDialogModule,
    ChartModule,
    TableModule
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
    MatDialogModule,
    ChartModule,
    TableModule
  ]
})
export class SharedModule { }
