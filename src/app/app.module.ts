import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SecHomeComponent } from './pages/sec-home/sec-home.component';
import { SecAboutUsComponent } from './pages/sec-about-us/sec-about-us.component';
import { SecSclComponent } from './pages/sec-scl/sec-scl.component';
import { SecEpicComponent } from './pages/sec-epic/sec-epic.component';
import { DashboardLoginModule } from './dashboard-login/dashboard-login.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecHomeComponent,
    SecAboutUsComponent,
    SecSclComponent,
    SecEpicComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
