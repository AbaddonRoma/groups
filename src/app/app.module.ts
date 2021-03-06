import { BrowserModule } from '@angular/platform-browser';
import { NgModule, group } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticComponent } from './admin/statistic/statistic.component';
import { FacultriesComponent } from './admin/facultries/facultries.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { SpecialitiesComponent } from './admin/specialities/specialities.component';
import { AdministratorsComponent } from './admin/administrators/administrators.component';
import { StudentsComponent } from './admin/students/students.component';
import { GroupsComponent } from './admin/groups/groups.component';
import { GroupsService } from './admin/groups/groups.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StatisticComponent,
    FacultriesComponent,
    SubjectsComponent,
    SpecialitiesComponent,
    AdministratorsComponent,
    StudentsComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [DataService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
