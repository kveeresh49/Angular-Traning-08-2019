import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustInfoDetailsComponent } from './cust-info-details.component';

describe('CustInfoDetailsComponent', () => {
  let component: CustInfoDetailsComponent;
  let fixture: ComponentFixture<CustInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
