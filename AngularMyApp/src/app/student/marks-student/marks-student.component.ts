import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-marks-student',
  templateUrl: './marks-student.component.html',
  styleUrls: ['./marks-student.component.scss']
})
export class MarksStudentComponent implements OnInit {

  constructor() { }
  @Input() marks: any[];
  @Output() outMethod = new EventEmitter();


  sum: any = 0;

  ngOnInit() {
    console.log(this.sum + 1)
    this.marks.forEach((data) => {
      this.sum = this.sum + data
    });

  }

  outPutMethod() {

    this.outMethod.emit({ name: 'veeresh', marks: this.sum });
  }

}
