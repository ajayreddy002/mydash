import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-reconcile',
  templateUrl: './reconcile.component.html',
  styleUrls: ['./reconcile.component.scss']
})
export class ReconcileComponent implements OnInit {
  isToolShow: boolean;

  constructor(
    public dialogRef: MatDialogRef<ReconcileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
  closeToolTip() {
    this.isToolShow = false;
  }
  openToolTip() {
    this.isToolShow = true;
  }
}
