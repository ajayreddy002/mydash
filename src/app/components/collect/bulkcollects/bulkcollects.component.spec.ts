import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkcollectsComponent } from './bulkcollects.component';

describe('BulkcollectsComponent', () => {
  let component: BulkcollectsComponent;
  let fixture: ComponentFixture<BulkcollectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkcollectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkcollectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
