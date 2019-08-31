import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardInfoDateComponent } from './student-card-info-date.component';

describe('StudentCardInfoDateComponent', () => {
  let component: StudentCardInfoDateComponent;
  let fixture: ComponentFixture<StudentCardInfoDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardInfoDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardInfoDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
