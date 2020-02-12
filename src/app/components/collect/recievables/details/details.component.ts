import { Component, OnInit } from '@angular/core';
import { InvoiceData } from 'src/app/_models/invoice.data.model';
import { MatDialog } from '@angular/material';
import { CustomerdialogComponent } from '../../invoices/customerdialog/customerdialog.component';
import { ReconcileComponent } from '../../invoices/reconcile/reconcile.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dropDownItems: any[];
  selectedItem: any;
  receiveData = [
    {
      receive_id: 'QC002',
      type: 'Quick Collect',
      inv_id: 'QC002',
      request_date: '-',
      due_date: '-',
      amount: '₹100.00',
      out_standing: '₹100.00',
      over_due: '0',
      status: 'Payment Due'
    }
  ];
  cols: any[];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'receive_id', header: 'Receive ID' },
      { field: 'type', header: 'Type' },
      { field: 'inv_id', header: 'Invoice ID' },
      { field: 'request_date', header: 'Request Date' },
      { field: 'due_date', header: 'Due Date' },
      { field: 'amount', header: 'Amount' },
      { field: 'out_standing', header: 'Out Standing' },
      { field: 'over_due', header: 'Over Due' },
      { field: 'status', header: 'Status' },
    ];
    this.dropDownItems = [
      { label: 'FY-2020', value: 'FY' },
      { label: 'Last Month', value: 'LM' },
      { label: 'Last 3 Month', value: 'L3M' },
      { label: 'Last 6 Monhts', value: 'L6M' }
    ];
    this.selectedItem = 'FY-2020';
  }
  openCustomerDialog() {
    const dialogRef = this.dialog.open(CustomerdialogComponent, {
    });
    dialogRef.afterClosed()
      .subscribe(data => {
        console.log(data);
      });
  }
  openReconcileDialog() {
    const dialogRef = this.dialog.open(ReconcileComponent, {
    });
    dialogRef.afterClosed()
      .subscribe(data => {
        console.log(data);
      });
  }
}
