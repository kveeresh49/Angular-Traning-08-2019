import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit,OnDestroy,AfterViewInit{

  course: string = "Angular";
  Students: any = ['sandeep', 'ajay'];
  width: number = 80
  public bindingText:string;

  public names = [
    {
      name: 'Veeresh',
      age: 20,
      marks: [100, 50, 300],
      sum: 0,
      image: 'https://st3.depositphotos.com/5792148/13370/v/1600/depositphotos_133708068-stock-illustration-cartoon-student-desk.jpg'
    },
    {
      name: 'Raj',
      age: 20,
      marks: [100, 100, 600],
      sum: 0,
      image: 'https://st3.depositphotos.com/5792148/13370/v/1600/depositphotos_133708068-stock-illustration-cartoon-student-desk.jpg'
    },
    {
      name: 'ajay',
      age: 20,
      marks: [100, 200, 700],
      sum: 0,
      image: 'https://st3.depositphotos.com/5792148/13370/v/1600/depositphotos_133708068-stock-illustration-cartoon-student-desk.jpg'
    },
    {
      name: 'sandeep',
      age: 20,
      marks: [100, 200, 1],
      sum: 0,
      image: 'https://st3.depositphotos.com/5792148/13370/v/1600/depositphotos_133708068-stock-illustration-cartoon-student-desk.jpg'
    },

  ];


  mypath: string = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg' // propery binding

  constructor() {
    console.log('im in constructor');

  }

  ngOnInit(){
    console.log('Im from ng onint');
    this.objectManiplation();

  }

  ngAfterViewInit(){

    console.log('After view ')
  }

  // Object Maniplation

  objectManiplation() {
    this.names.forEach((data, index) => {
      let sum1 = 0;
      if (data.marks) {
        data.marks.forEach((data) => {
          sum1 += data;
        })
      }
      data.sum = sum1
    });
    console.log(this.names);
  }


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
ngOnDestroy(){
 console.log('distroed');

}

}
