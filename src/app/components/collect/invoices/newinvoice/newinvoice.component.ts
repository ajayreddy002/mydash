import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { CustomerdialogComponent } from '../customerdialog/customerdialog.component';
import { AdditemComponent } from '../additem/additem.component';
export interface User {
  name: string;
  id: number;
}
@Component({
  selector: 'app-newinvoice',
  templateUrl: './newinvoice.component.html',
  styleUrls: ['./newinvoice.component.scss']
})
export class NewinvoiceComponent implements OnInit {
  paymentTermsArr: any[];
  selectedPTerm: string;
  myControl = new FormControl();
  categoryControl = new FormControl();
  itemControl = new FormControl();
  options: User[] = [
    { name: 'ro1_test', id: 1 },
    { name: 'ro2_test', id: 2 },
    { name: 'ro2_test', id: 3 }
  ];
  itemsData: User[] = [
    { name: 'Mouse', id: 1 },
    { name: 'Test', id: 2 },
    { name: 'Test item', id: 3 },
  ];
  categoryOptions: User[] = [
    { name: 'Sales - Default', id: 1 },
    { name: 'Sales - sdafsdfa', id: 2 },
  ];
  customerNameArr: Observable<User[]>;
  categoryArr: Observable<User[]>;
  filteredItemsArray: Observable<User[]>;
  constructor(
    public dialog: MatDialog
  ) {
    this.paymentTermsArr = [
      { label: '7 Days', value: '7' },
      { label: '15 Days', value: '15' },
      { label: '30 Days', value: '30' },
      { label: '45 Days', value: '45' },
      { label: '60 Days', value: '60' },
      { label: '90 Days', value: '90' },
    ];
  }

  ngOnInit() {
    this.setCustomerNameArray();
    this.setCategoryArray();
    this.setItemsArray();
  }

  setCustomerNameArray() {
    this.customerNameArr = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  setItemsArray() {
    this.filteredItemsArray = this.itemControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._itemsFilter(name) : this.itemsData.slice())
      );
  }
  setCategoryArray() {
    this.categoryArr = this.categoryControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._categoryFilter(name) : this.categoryOptions.slice())
      );
  }

  // tslint:disable-next-line: jsdoc-format
  /** @param name is the new customer name which is try to add **/
  openAddCustomerDialog(name: any) {
    const dialogRef = this.dialog.open(CustomerdialogComponent, {
      data: { customerName: name }
    });
    dialogRef.afterClosed()
      .subscribe(
        data => {
          this.setCustomerNameArray();
          this.myControl.setValue('');
          console.log(data);
        }
      );
  }
  openAddItemDialog(name: any) {
    const dialogRef = this.dialog.open(AdditemComponent, {
      data: { customerName: name }
    });
    dialogRef.afterClosed()
      .subscribe(
        data => {
          this.setItemsArray();
          this.itemControl.setValue('');
          console.log(data);
        }
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  displayItemsFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  displayCategoryData(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue1 = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue1) === 0);
  }
  private _categoryFilter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.categoryOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  private _itemsFilter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.itemsData.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
