import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { MarksStudentComponent } from '../marks-student/marks-student.component';
import { element } from 'protractor';
import { SharedserviceService } from 'src/shared/sharedservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit, OnDestroy, AfterViewInit {

  course: string = "Angular";
  Students: any = ['sandeep', 'ajay'];
  width: number = 80;
  public names: any[] =[];
  public bindingText: string;
  @ViewChild('marksstudent', { static: false }) marksStudentComponent: MarksStudentComponent;

  @ViewChildren('jokes') jokes: ElementRef;




  mypath: string = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg' // propery binding

  // private  myserve = new SharedserviceService()

  constructor(private myserve: SharedserviceService, private route:Router) {
    console.log('im in constructor');

  }

  ngOnInit() {
    console.log('Im from ng onint');
    console.log(this.names.length);
    this.names = this.myserve.getMyfirstName();
    console.log(this.names);
    //this.objectManiplation();
    this.myserve.objectManiplation(this.names);

  }

  ngAfterViewInit() {

    console.log('After view ');
    console.log(this.jokes)

  }

  // Object Maniplation

  // objectManiplation(this.names) {
  //   this.names.forEach((data, index) => {
  //     let sum1 = 0;
  //     if (data.marks) {
  //       data.marks.forEach((data) => {
  //         sum1 += data;
  //       })
  //     }
  //     data.sum = sum1
  //   });
  //   console.log(this.names);
  // }


  myfunction(name, index) {
    console.log('name:' + name);
  }

  isStyleRequired(item) {
    if (item.sum < 500) {
      return true
    }
  }
  getBackgroundColor(item): any {
    if (item.sum > 500) {
      return 'blue'
    }
  }

  getDetailsStudent(item) {
    console.log(item);
  }


  getChnageValue(item) {
    console.log(item.target.value);
  }
  getChild(event) {
    console.log(event);
  }

  // Code for Event Emitter

  incremtByOne(event) {
    console.log(event);
  }

  decrement() {
    this.marksStudentComponent.decreaseByOne();
  }

  ngOnDestroy() {
    console.log('distroed');

  }

  navigate(){
 this.route.navigate(['/new-info']);
  }

}
