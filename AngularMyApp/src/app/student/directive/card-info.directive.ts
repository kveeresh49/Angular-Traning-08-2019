import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardInfo]'
})
export class CardInfoDirective implements OnInit {

  constructor(private el:ElementRef) {

    el.nativeElement.style.color = 'blue';

  }


  ngOnInit() {

    debugger;
    console.log(this.el);
    this.el.nativeElement.innerText =  this.el.nativeElement.innerText + ' veeresh';

  }


}
