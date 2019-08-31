import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterContentInit, ContentChild } from '@angular/core';


@Component({
  selector: 'app-marks-student',
  templateUrl: './marks-student.component.html',
  styleUrls: ['./marks-student.component.scss']
})
export class MarksStudentComponent implements OnInit,AfterContentInit {

  constructor() { }
  @Input() marks: any[];
  @Input() name: string;
  @Output() outMethod = new EventEmitter();
  @Output() count1 = new EventEmitter();
  @ViewChild('btnstyle1', { static: false }) btnstyle1: ElementRef;


  public message: string = '';
  count: number = 0;


  sum: any = 0;

  ngOnInit() {
    console.log(this.sum + 1)
    this.marks.forEach((data) => {
      this.sum = this.sum + data
    });
  }

  ngAfterContentInit(){
    console.log(this.btnstyle1);
  }

  outPutMethod() {
    this.outMethod.emit({ name: this.name, marks: this.sum });
  }

  getName() {
    console.log(this.name);
  }


  increaseByOne() {
    this.count = this.count + 1;
    this.message = "Counter: " + this.count;
    this.count1.emit(this.message);
  }
  decreaseByOne() {
    this.count = this.count - 1;
    this.message = "Counter: " + this.count;
    console.log(this.message);
  }

}
