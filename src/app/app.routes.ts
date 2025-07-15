import { Routes } from '@angular/router';
import { ClinicListComponent } from './pages/clinic-list.component';
import { ClinicDetailComponent } from './pages/clinic-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clinics', pathMatch: 'full' },
  { path: 'clinics', component: ClinicListComponent },
  { path: 'clinics/:id', component: ClinicDetailComponent }
];
