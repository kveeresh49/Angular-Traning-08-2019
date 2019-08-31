import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { CustDateComponent } from '../cust-date/cust-date.component';

@Component({
  selector: 'app-cust-info-details',
  templateUrl: './cust-info-details.component.html',
  styleUrls: ['./cust-info-details.component.scss']
})
export class CustInfoDetailsComponent implements OnInit, AfterContentInit {



  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
   // console.log(this.custDateComponent,'cust-detais');
  }

}
