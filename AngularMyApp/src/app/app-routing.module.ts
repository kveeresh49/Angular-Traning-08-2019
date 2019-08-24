import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewInfoComponent } from './student/new-info/new-info.component';
import { StudentInfoComponent } from './student/student-info/student-info.component';
import { Lab2Component } from './Lab/lab2/lab2.component';
import {  Lab3Component} from './Lab/lab3/lab3.component';

const routes: Routes = [
  {path:'new-info',component:NewInfoComponent},
  {path:'student',component:StudentInfoComponent},
  {path:'lab2',component:Lab2Component},
  {path:'lab3',component :Lab3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
