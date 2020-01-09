import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trialbalance',
  templateUrl: './trialbalance.component.html',
  styleUrls: ['./trialbalance.component.scss']
})
export class TrialbalanceComponent implements OnInit {
  assetData: any = [
    {
      name: 'Accounts receivables', debit_amount: '₹1,800.00', credit_amount: '',
      childData: []
    },
    {
      name: 'Cash & Bank', debit_amount: '', credit_amount: '₹18,802.20',
      childData: [
        { name: 'Cash on hand', debit_amount: '', credit_amount: '₹500.00' },
        { name: 'Central Bank of India (Corporate) - xxxx5827', debit_amount: '', credit_amount: '₹18,302.20' },
      ]
    },
    { name: 'TDS Receivables', debit_amount: '₹200.00', credit_amount: '', childData: [] },
  ];
  isChild = false;
  constructor() { }

  ngOnInit() {
  }
  showChildData() {
    this.isChild = !this.isChild;
  }
}
