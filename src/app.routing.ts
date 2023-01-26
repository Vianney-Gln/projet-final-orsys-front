import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login/login.component';
import { ListReservationComponent } from './app/components/reservations/list-reservation/list-reservation.component';

const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'reservations', component: ListReservationComponent },
];

export const appRouting = RouterModule.forRoot(AppRoutes);
