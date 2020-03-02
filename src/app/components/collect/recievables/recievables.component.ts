import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-recievables',
  templateUrl: './recievables.component.html',
  styleUrls: ['./recievables.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class RecievablesComponent implements OnInit {
  customerData: any = [
    {
      id: 1, customer_name: 'ro_test', total_receivables: '₹97,810.00',
      total_received: '₹0.00', out_standing: '₹97,810.00', dso: '30'
    },
    {
      id: 2, customer_name: 'Test', total_receivables: '₹97,810.00',
      total_received: '₹0.00', out_standing: '₹97,810.00', dso: '30'
    },
    {
      id: 3, customer_name: 'Test', total_receivables: '₹97,810.00',
      total_received: '₹0.00', out_standing: '₹97,810.00', dso: '30'
    },
  ];
  dropDownItems: any[];
  selectedItem: any;
  cols: any[];
  constructor() {
    this.dropDownItems = [
      { label: 'FY-2020', value: 'FY' },
      { label: 'Last Month', value: 'LM' },
      { label: 'Last 3 Month', value: 'L3M' },
      { label: 'Last 6 Monhts', value: 'L6M' }
    ];
  }

  ngOnInit() {
    this.cols = [
      { field: 'customer_name', header: 'Customer Name' },
      { field: 'total_receivables', header: 'Total Receivables' },
      { field: 'total_received', header: 'Total Received' },
      { field: 'out_standing', header: 'Outstanding' },
      { field: 'dso', header: 'DSO' }
    ];
    this.selectedItem = 'FY-2020';
  }

}
