import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import { FormsModule } from '@angular/forms';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';

import { TimesheetComponent } from './timesheet/timesheet.component';
import { DayPilotModule } from 'daypilot-pro-angular';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "../data.service";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { OjasSerService } from './ojas-ser.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    EmpdashboardComponent,
    TimesheetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DayPilotModule,
    AppRoutingModule, // hear we add approuting
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
   
  ],
  providers: [DataService,DatePipe,OjasSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
