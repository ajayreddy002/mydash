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
  MatDialogModule,
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { AddcontactComponent } from '../contact/addcontact/addcontact.component';
import { ChartModule } from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';
import { ChartsModule } from 'ng2-charts';

import { NgCircleProgressModule } from 'ng-circle-progress';
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
    TableModule,
    CheckboxModule,
    DateRangePickerModule,
    CalendarModule,
    FormsModule,
    NgApexchartsModule,
    RadioButtonModule,
    DropdownModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginatorModule,
    ChartsModule,
    NgCircleProgressModule
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
    TableModule,
    CheckboxModule,
    DateRangePickerModule,
    CalendarModule,
    FormsModule,
    NgApexchartsModule,
    RadioButtonModule,
    DropdownModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginatorModule,
    ChartsModule,
    NgCircleProgressModule
  ]
})
export class SharedModule { }
