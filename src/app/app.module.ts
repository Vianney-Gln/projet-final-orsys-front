import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { ListReservationComponent } from './components/reservations/list-reservation/list-reservation.component';
import { appRouting } from 'src/app.routing';

@NgModule({
  declarations: [AppComponent, LoginComponent, ListReservationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
