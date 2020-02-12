import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-customerdialog',
  templateUrl: './customerdialog.component.html',
  styleUrls: ['./customerdialog.component.scss']
})
export class CustomerdialogComponent implements OnInit {
  selectedValues: string;
  constructor(
    public dialogRef: MatDialogRef<CustomerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
