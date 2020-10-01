import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
=======
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> home-paula

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SaibaMaisComponent
=======
    HomeComponent,
    NavbarComponent,
    FooterComponent
>>>>>>> home-paula
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
