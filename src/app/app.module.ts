import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProceedReportComponent } from './components/proceed-report/proceed-report.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//#region AngularMaterial
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

//#endregion
import { NavigateFormComponent } from './components/navigate-form/navigate-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProceedReportComponent,
    ArchiveComponent,
    NavbarComponent,
    LogsComponent,
    NavigateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  providers: [HttpClient, { provide: MAT_DATE_LOCALE, useValue: 'ru-Ru' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
