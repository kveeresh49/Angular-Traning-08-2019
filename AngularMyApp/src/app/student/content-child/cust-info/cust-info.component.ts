import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { CustDateComponent } from '../cust-date/cust-date.component';

@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.scss']
})
export class CustInfoComponent implements OnInit,AfterContentInit {
  @ContentChild(CustDateComponent, { static: false }) custDateComponent: CustDateComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log(this.custDateComponent,'data')
  }

}
