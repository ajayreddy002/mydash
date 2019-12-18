import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IBillModel } from 'src/app/_models/bill.model';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss', '../../collect/invoices/invoices.component.scss']
})
export class BillsComponent implements OnInit {
  invoiceData: IBillModel[] = [
    // {
    //   bill: 25112, bill_date: '12/12/2019', vendor_name: 'XYZ Com...XYZ', amount: 150000,
    //   due_date: '12/12/2019', status: 'pending', out_standing: '15000'
    // },
  ];
  displayedColumns: string[] = ['bill', 'bill_date', 'vendor_name', 'due_date', 'amount',
     'out_standing', 'status'];
  dataSource: MatTableDataSource<IBillModel>;
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
