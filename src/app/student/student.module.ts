import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './studentlogin/student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
})
export class StudentModule { }
