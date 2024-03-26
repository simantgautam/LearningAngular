import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];
