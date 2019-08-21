import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { FooterComponent } from './header/footer/footer.component';
import { StudentInfoComponent } from './student/student-info/student-info.component';
import { NewInfoComponent } from './student/new-info/new-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StudentInfoComponent,
    NewInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




