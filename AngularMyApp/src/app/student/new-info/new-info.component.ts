import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/shared/sharedservice.service';

@Component({
  selector: 'app-new-info',
  templateUrl: './new-info.component.html',
  styleUrls: ['./new-info.component.scss']
})
export class NewInfoComponent implements OnInit {

  constructor(private myserve:SharedserviceService) { }

  public names = []

  ngOnInit() {

    console.log(this.myserve.myname);
   // this.myserve.objectManiplation(this.names)
  }

}
