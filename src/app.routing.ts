import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login/login.component';
import { ListReservationComponent } from './app/components/reservations/list-reservation/list-reservation.component';
import { CreateReservationComponent } from './app/components/reservations/create-reservation/create-reservation.component';
import { ConcessionnaireComponent } from './app/components/concessionnaire/concessionnaire.component';
import { DetailReservationComponent } from './app/components/concessionnaire/detail-reservation/detail-reservation.component';
import { CreationUtilisateurComponent } from './app/components/utilisateurs/creation-utilisateur/creation-utilisateur.component';

const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CreationUtilisateurComponent },
  { path: 'reservations', component: ListReservationComponent },
  { path: 'reservations/create', component: CreateReservationComponent },
  { path: 'concessionnaire', component: ConcessionnaireComponent },
  { path: 'detail-reservation/:id', component: DetailReservationComponent },
];

export const appRouting = RouterModule.forRoot(AppRoutes);
