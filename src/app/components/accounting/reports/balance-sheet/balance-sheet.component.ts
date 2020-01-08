import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {
  data: any;
  cars: any = [
    { name: 'Cash & Bank', amount: '₹18,802.20 CR' },
    { name: 'Accounts receivables', amount: '₹1,800.00 DR' },
    { name: 'TDS Receivables', amount: '₹200.00 DR' },
  ];
  liabilityData = [];
  data2: any;
  equityData = [{
    name: 'Retained Earnings', amount: '₹16,802.20 DR'
  }];
  constructor() {
  }

  ngOnInit() {
    this.data = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ],
        datasets: [
          {
            data: [300, 40, 5],
            backgroundColor: [
              '#f97f51',
              '#1b9cfc',
              '#aaf3e0'
            ],
            hoverBackgroundColor: [
              '#f97f51',
              '#1b9cfc',
              '#aaf3e0'
            ],

          }],
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    });
    this.data2 = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
        ],
        datasets: [
          {
            data: [300],
            backgroundColor: [
              '#b33771',
            ],
            hoverBackgroundColor: [
              '#b33771',
            ],

          }],
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

}
