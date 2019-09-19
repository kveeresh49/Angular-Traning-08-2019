import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { FooterComponent } from './header/footer/footer.component';
import { StudentInfoComponent } from './student/student-info/student-info.component';
import { NewInfoComponent } from './student/new-info/new-info.component';
import { FormsModule } from '@angular/forms';
import { Lab1Component } from './Lab/lab1/lab1.component';
import { Lab2Component } from './Lab/lab2/lab2.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Lab3Component } from './Lab/lab3/lab3.component';
import { Labserice } from './Lab/labservice';
import { MarksStudentComponent } from './student/marks-student/marks-student.component';
import { StudentCardDetailsComponent } from './student/student-card-details/student-card-details.component';
import { StudentCardInfoComponent } from './student/student-card-info/student-card-info.component';
import { StudentCardInfoDateComponent } from './student/student-card-info-date/student-card-info-date.component';
import { CustInfoComponent } from './student/content-child/cust-info/cust-info.component';
import { CustInfoDetailsComponent } from './student/content-child/cust-info-details/cust-info-details.component';
import { CustDateComponent } from './student/content-child/cust-date/cust-date.component';
import { CardInfoDirective } from './student/directive/card-info.directive';
import { SharedserviceService } from 'src/shared/sharedservice.service';
import { StudentModule } from './student/student/student.module';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
const routes: Routes = [
  {path:'',redirectTo:'student',pathMatch:'full'},
  { path: 'new-info', component: NewInfoComponent },
  { path: 'student', component: StudentInfoComponent },
  { path: 'new-card-info', component: StudentCardInfoComponent },
  { path: 'cust-info', component: CustInfoComponent },
  { path: 'lab2', component: Lab2Component },
  { path: 'lab3', component: Lab3Component },
  {path:'template',component:TemplateDrivenComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StudentInfoComponent,
    NewInfoComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    MarksStudentComponent,
    StudentCardDetailsComponent,
    StudentCardInfoComponent,
    StudentCardInfoDateComponent,
    CustInfoComponent,
    CustInfoDetailsComponent,
    CustDateComponent,
    CardInfoDirective,
    TemplateDrivenComponent


  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
   RouterModule.forRoot(routes),
   FormsModule,
    ReactiveFormsModule,
    StudentModule
  ],
  providers: [Labserice,SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }




