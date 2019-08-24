import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.scss']
})
export class Lab1Component implements OnInit {

  model: any = {};
  myflag:boolean;
  getFlag:boolean;

  getEmployeeData = [];

  constructor() {

   }

  ngOnInit() {
  }

  onSubmit(lab1) {
 this.myflag = false;
 this.getFlag = false;
 if(this.getEmployeeData.length == 0) {
  this.getEmployeeData.push(lab1.form.value);
  this.getFlag = true;
 } else {
  this.getEmployeeData.forEach((data) => {
    if(data.id == lab1.form.controls.id.value) {
      alert('employee is exit');
      this.myflag = true;
    }

  })

 }
 if(this.myflag == false && this.getFlag== false) {
  this.getEmployeeData.push(lab1.form.value);
 }

    console.log(this.getEmployeeData);

//   if(this.employeeArray.length == 0) {
//     this.employeeArray.push(this.model);
//   } else {
//     this.employeeArray.forEach((data) => {

//       if(data.id == this.model.id) {
//         alert('Employee is Exited')
//       } else {
//         this.employeeArray.push(this.model);
//       }
//     })
//   }

//  console.log(this.employeeArray);

  }

  update(item,lab1) {
    lab1.form.patchValue(item);
  }
  delete(i) {
     this.getEmployeeData.splice(i,1);
  }

  sortOrder(sort) {

    if(sort) {
      this.getEmployeeData.sort(this.compare);
    }

  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const id1 = a.id.toUpperCase();
    const id2 = b.id.toUpperCase();

    let comparison = 0;
    if (id1 > id2) {
      comparison = 1;
    } else if (id1 < id2) {
      comparison = -1;
    }
    return comparison;
  }


}
