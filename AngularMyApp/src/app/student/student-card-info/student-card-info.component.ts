import { Component, OnInit, ContentChild, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { StudentCardInfoDateComponent } from '../student-card-info-date/student-card-info-date.component';

@Component({
  selector: 'app-student-card-info',
  templateUrl: './student-card-info.component.html',
  styleUrls: ['./student-card-info.component.scss']
})
export class StudentCardInfoComponent implements OnInit {


  @ViewChild('angular', { static: false }) el: ElementRef;
  @ViewChild('angular1', { static: false }) el2: ElementRef;

  constructor() { }

  ngOnInit() {


    console.log(this.el);
    console.log(this.el2);
    debugger;
    this.el.nativeElement.style.color = 'blue';

  }





}
