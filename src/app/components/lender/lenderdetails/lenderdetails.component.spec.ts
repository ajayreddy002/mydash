import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderdetailsComponent } from './lenderdetails.component';

describe('LenderdetailsComponent', () => {
  let component: LenderdetailsComponent;
  let fixture: ComponentFixture<LenderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
