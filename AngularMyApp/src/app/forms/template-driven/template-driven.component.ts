import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { format } from 'util';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit, AfterContentInit {

  @ViewChild('f', { static: false }) title: ElementRef;

  public model = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {





    // Api , veeresh@gmail.com

  }

  ngAfterContentInit() {
    console.log(this.title);
  }



  onSubmit(f) {
    console.log(f);

  }


  changeModel(data) {

    console.log(data);

  }
}
