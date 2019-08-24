import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.scss']
})
export class Lab2Component implements OnInit {

  profileForm:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      productid: [''],
      productName: [''],
      productCost:[''],
      dropdownvalue:[''],
      productOnline:[''],
      productcategory:[''],
      productcheck:['']

  });
}



submit(data) {
  console.log(data)
}
}
