import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulktransferComponent } from './bulktransfer.component';

describe('BulktransferComponent', () => {
  let component: BulktransferComponent;
  let fixture: ComponentFixture<BulktransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulktransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
