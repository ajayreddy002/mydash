import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponent } from './components/shared/shared.component';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
