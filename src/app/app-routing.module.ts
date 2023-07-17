import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProceedReportComponent } from './components/proceed-report/proceed-report.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { LogsComponent } from './components/logs/logs.component';
import { NavigateFormComponent } from './components/navigate-form/navigate-form.component';

const childRoutes = [{ path: 'proceed', component: ProceedReportComponent },
{ path: 'archive', component: ArchiveComponent },
{ path: 'logs', component: LogsComponent, }
];


const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: NavigateFormComponent, children: childRoutes },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
