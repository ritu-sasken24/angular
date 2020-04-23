// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLoginRoutingModule } from './dashboard-login-routing.module';

import { MaterialModule } from '../material/material.module';
import { DashboardLoginComponent } from './dashboard-login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardLoginComponent, DashboardComponent
  ],
  imports: [CommonModule,
    DashboardLoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardLoginModule { }
