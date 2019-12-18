import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceData } from 'src/app/_models/invoice.data.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IQuickCollectModel } from 'src/app/_models/quick.collect.model';

@Component({
  selector: 'app-quickcollect',
  templateUrl: './quickcollect.component.html',
  styleUrls: ['./quickcollect.component.scss']
})
export class QuickcollectComponent implements OnInit {
  qcData: IQuickCollectModel[] = [
    {
      receive_id: 12345678, qc_id: 56412, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000',
    },
    {
      receive_id: 12345786, qc_id: 56452, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000'
    },
    {
      receive_id: 12347811, qc_id: 56423, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000'
    },
    {
      receive_id: 12347811, qc_id: 56423, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000'
    },
    {
      receive_id: 12347811, qc_id: 56423, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000'
    },
    {
      receive_id: 12347811, qc_id: 56423, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000'
    },
    {
      receive_id: 12347811, qc_id: 56423, recipient: 'XYZ Com...XYZ', amount: 150000,
      status: 'pending', out_standing: '15000'
    },
  ];
  displayedColumns: string[] = ['receive_id', 'qc_id', 'recipient', 'amount', 'status'];
  dataSource: MatTableDataSource<IQuickCollectModel>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource(this.qcData);
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
