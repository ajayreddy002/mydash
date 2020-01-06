import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdddialogComponent } from './adddialog/adddialog.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openAddDialog(dialogName: string) {
    const dialogRef = this.dialog.open(AdddialogComponent, {
      data: dialogName,
      width: '400px'
    });
    dialogRef.afterClosed()
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }
}
