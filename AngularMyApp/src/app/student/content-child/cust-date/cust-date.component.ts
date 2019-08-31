import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-date',
  templateUrl: './cust-date.component.html',
  styleUrls: ['./cust-date.component.scss']
})
export class CustDateComponent implements OnInit {

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
