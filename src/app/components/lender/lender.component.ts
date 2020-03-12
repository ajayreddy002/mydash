import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.scss']
})
export class LenderComponent implements OnInit {
  lenderCols: any = [];
  selectedLender: any;
  lenderData = [
    {
      id: 1,
      companyName: 'Loknath Enterprises',
      revenue: '₹30,00,000',
      netIncome: '₹22,00,000',
      personalCibilScore: '700',
      yearsOfOperation: '5 Years & 4 Months'
    },
    {
      id: 2,
      companyName: 'Loknath Enterprises',
      revenue: '₹30,00,000',
      netIncome: '₹22,00,000',
      personalCibilScore: '700',
      yearsOfOperation: '5 Years & 4 Months'
    },
    {
      id: 3,
      companyName: 'Loknath Enterprises',
      revenue: '₹30,00,000',
      netIncome: '₹22,00,000',
      personalCibilScore: '700',
      yearsOfOperation: '5 Years & 4 Months'
    },
    {
      id: 4,
      companyName: 'Loknath Enterprises',
      revenue: '₹30,00,000',
      netIncome: '₹22,00,000',
      personalCibilScore: '700',
      yearsOfOperation: '5 Years & 4 Months'
    },
    {
      id: 5,
      companyName: 'Loknath Enterprises',
      revenue: '₹30,00,000',
      netIncome: '₹22,00,000',
      personalCibilScore: '700',
      yearsOfOperation: '5 Years & 4 Months'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.lenderCols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'revenue', header: 'Revenue' },
      { field: 'netIncome', header: 'Net Income' },
      { field: 'personalCibilScore', header: 'Personal CIBIL Score' },
      { field: 'yearsOfOperation', header: 'Years Of Operation' },
    ];
  }

}
