import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingComponent } from '../angular-routing/angular-routing.component';
import { RouterModule } from '@angular/router';
import { NewInfoComponent } from '../new-info/new-info.component';



@NgModule({
  declarations: [ AngularRoutingComponent],
  imports: [
    CommonModule,

  ]
})
export class StudentModule { }
