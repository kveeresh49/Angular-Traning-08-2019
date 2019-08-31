import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card-info-date',
  templateUrl: './student-card-info-date.component.html',
  styleUrls: ['./student-card-info-date.component.scss']
})
export class StudentCardInfoDateComponent implements OnInit {

   date:Date= new Date();
  constructor() { }


  ngOnInit() {
  }


  getFullNmae() {
    console.log('veeresh,kumar')
  }
}
