import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent } from './lender.component';
import { LenderdetailsComponent } from './lenderdetails/lenderdetails.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [LenderComponent, LenderdetailsComponent],
  imports: [
    CommonModule,
    LenderRoutingModule,
    SharedModule,
    // NgCircleProgressModule.forRoot({
    //   radius: 60,
    //   space: -10,
    //   outerStrokeGradient: true,
    //   outerStrokeWidth: 10,
    //   outerStrokeColor: '#4882c2',
    //   outerStrokeGradientStopColor: '#53a9ff',
    //   innerStrokeColor: '#e7e8ea',
    //   innerStrokeWidth: 10,
    //   title: 'UI',
    //   animateTitle: false,
    //   animationDuration: 1000,
    //   showUnits: false,
    //   showBackground: false,
    //   clockwise: false,
    //   startFromZero: false
    // })
  ]
})
export class LenderModule { }
