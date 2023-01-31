import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { ListReservationComponent } from './components/reservations/list-reservation/list-reservation.component';
import { appRouting } from 'src/app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateReservationComponent } from './components/reservations/create-reservation/create-reservation.component';
import { ConcessionnaireComponent } from './components/concessionnaire/concessionnaire.component';
import { ListReservationConcessionnaireComponent } from './components/concessionnaire/list-reservation-concessionnaire/list-reservation-concessionnaire.component';
import { NavConcessionnaireComponent } from './components/concessionnaire/nav-concessionnaire/nav-concessionnaire.component';
import { DetailReservationComponent } from './components/concessionnaire/detail-reservation/detail-reservation.component';
import { CreationUtilisateurComponent } from './components/utilisateurs/creation-utilisateur/creation-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListReservationComponent,
    NavigationComponent,
    CreateReservationComponent,
    ConcessionnaireComponent,
    ListReservationConcessionnaireComponent,
    NavConcessionnaireComponent,
    DetailReservationComponent,
    CreationUtilisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
