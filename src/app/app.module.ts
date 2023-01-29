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
import { ConcessionnaireComponent } from './concessionnaire/concessionnaire/concessionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListReservationComponent,
    NavigationComponent,
    CreateReservationComponent,
    ConcessionnaireComponent,
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
