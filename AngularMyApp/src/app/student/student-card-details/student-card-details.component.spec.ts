import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardDetailsComponent } from './student-card-details.component';

describe('StudentCardDetailsComponent', () => {
  let component: StudentCardDetailsComponent;
  let fixture: ComponentFixture<StudentCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
