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
    MarksStudentComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Labserice],
  bootstrap: [AppComponent]
})
export class AppModule { }




