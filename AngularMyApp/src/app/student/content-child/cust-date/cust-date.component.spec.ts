import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDateComponent } from './cust-date.component';

describe('CustDateComponent', () => {
  let component: CustDateComponent;
  let fixture: ComponentFixture<CustDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
