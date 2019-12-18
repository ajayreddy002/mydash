import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickcollectComponent } from './quickcollect.component';

describe('QuickcollectComponent', () => {
  let component: QuickcollectComponent;
  let fixture: ComponentFixture<QuickcollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickcollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickcollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
