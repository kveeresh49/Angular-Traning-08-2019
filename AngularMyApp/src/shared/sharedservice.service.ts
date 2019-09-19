import { Injectable } from '@angular/core';

@Injectable()

export class SharedserviceService {

  public myname = 'Im from Angular service';
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

  getMyfirstName() {
    return this.names;
  }


  objectManiplation(names) {
    names.forEach((data, index) => {
      let sum1 = 0;
      if (data.marks) {
        data.marks.forEach((data) => {
          sum1 += data;
        })
      }
      data.sum = sum1
    });
    debugger;
    console.log(names);
  }

  constructor() { }
}
