import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceData } from 'src/app/_models/invoice.data.model';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoiceData: InvoiceData[] = [
    {
      invoice: 25112, inv_date: '12/12/2019', recipient: 'XYZ Com...XYZ', amount: 150000,
      due_date: '12/12/2019', status: 'pending', over_due: '10000', out_standing: '15000'
    },
    {
      invoice: 25113, inv_date: '12/12/2019', recipient: 'XYZ Com...XYZ', amount: 150000,
      due_date: '12/12/2019', status: 'pending', over_due: '10000', out_standing: '15000'
    },
    {
      invoice: 25114, inv_date: '12/12/2019', recipient: 'XYZ Com...XYZ', amount: 150000,
      due_date: '12/12/2019', status: 'pending', over_due: '10000', out_standing: '15000'
    },
  ];
  displayedColumns: string[] = ['invoice', 'inv_date', 'recipient', 'amount',
    'due_date', 'status', 'over_due', 'out_standing'];
  dataSource: MatTableDataSource<InvoiceData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource(this.invoiceData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
