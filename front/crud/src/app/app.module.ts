import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ListDepComponent } from './department/list-dep/list-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { StudentComponent } from './student/student.component';
import { ShowStuComponent } from './student/show-stu/show-stu.component';
import { AddEditStuComponent } from './student/add-edit-stu/add-edit-stu.component';
import { MutualService } from './mutual.service';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ListDepComponent,
    AddEditDepComponent,
    StudentComponent,
    ShowStuComponent,
    AddEditStuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MutualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
