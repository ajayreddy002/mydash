import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  foods: Food[] = [
    {value: 'last3months', viewValue: 'Last 3 Months'},
    {value: 'last6months', viewValue: 'Last 6 Months'},
    {value: 'last12months', viewValue: 'Last 12 Months'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
