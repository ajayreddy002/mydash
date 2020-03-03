import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-customerdialog',
  templateUrl: './customerdialog.component.html',
  styleUrls: ['./customerdialog.component.scss']
})
export class CustomerdialogComponent implements OnInit {
  selectedValues: string;
  customerName: any;
  isBillShipSame = false;
  cities: City[];
  selectedCity: City;
  constructor(
    public dialogRef: MatDialogRef<CustomerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) { 
    // this.getJSON().subscribe(data1 => {
    //   console.log(data1);
    //   this.cities = data1.data;
    // });
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit() {
    if (this.data !== undefined) {
      this.customerName = this.data.customerName;
    }
    
  }
  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/statelist.json');
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onChange(event: any) {
    this.isBillShipSame = event;
  }
}
