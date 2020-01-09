import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAcComponent } from './chart-of-ac.component';

describe('ChartOfAcComponent', () => {
  let component: ChartOfAcComponent;
  let fixture: ComponentFixture<ChartOfAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartOfAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
