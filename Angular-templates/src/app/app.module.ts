//  librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; /* necesarios para usar formularios reactivos */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// importaciones de compoentes
import { AppComponent } from './app.component';
import { MenuReportsComponent } from './pages/menu-reports/menu-reports.component';
import { AppRoutingModule } from './app-routing.module';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { TableReportsComponent } from './components/table-reports/table-reports.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    MenuReportsComponent,
    MainDashboardComponent,
    TableReportsComponent,
    NavigationComponent,
    PagesComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
