import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { StudentCardInfoDateComponent } from '../student-card-info-date/student-card-info-date.component';

@Component({
  selector: 'app-student-card-details',
  templateUrl: './student-card-details.component.html',
  styleUrls: ['./student-card-details.component.scss']
})
export class StudentCardDetailsComponent implements OnInit, AfterContentInit {
  // @ContentChild(StudentCardInfoDateComponent, { static: true }) studentCardInfoDateComponent: StudentCardInfoDateComponent;
  @ContentChildren(StudentCardInfoDateComponent, { descendants: true }) studentCardInfoDateComponent: QueryList<StudentCardInfoDateComponent>;
  constructor() { }

  ngOnInit() {

  }
  ngAfterContentInit() {
    console.log(this.studentCardInfoDateComponent.toArray(), 'toArray');
    // this.studentCardInfoDateComponent.getFullNmae();

    this.studentCardInfoDateComponent.toArray().forEach((el, index) => {
      if (index == 2) {
       setInterval(()=>{
       console.log(new Date(el.date));
       new Date(el.date);
         },1000)
      }
    });
  }

}
