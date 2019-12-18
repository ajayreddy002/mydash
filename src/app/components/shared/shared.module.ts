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
   MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [SidenavComponent],
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
    MatDividerModule
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
    MatPaginatorModule
  ]
})
export class SharedModule { }
