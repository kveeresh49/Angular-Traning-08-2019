import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardInfoComponent } from './student-card-info.component';

describe('StudentCardInfoComponent', () => {
  let component: StudentCardInfoComponent;
  let fixture: ComponentFixture<StudentCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
