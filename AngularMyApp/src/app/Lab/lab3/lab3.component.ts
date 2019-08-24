import { Component, OnInit } from '@angular/core';
import { Labserice } from '../labservice';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.scss']
})
export class Lab3Component implements OnInit {

  constructor(private labservice:Labserice) {

   }

  ngOnInit() {
   console.log(this.labservice.getEmployeeData());

  }

}
