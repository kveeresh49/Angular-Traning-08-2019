import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewInfoComponent } from './student/new-info/new-info.component';
import { StudentInfoComponent } from './student/student-info/student-info.component';


const routes: Routes = [
  {path:'new-info',component:NewInfoComponent},
  {path:'student',component:StudentInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
