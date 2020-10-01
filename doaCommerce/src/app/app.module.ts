import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
=======
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> home-paula
=======
import { ContatoComponent } from './contato/contato.component';
>>>>>>> contato-Carol

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    SaibaMaisComponent
=======
    HomeComponent,
    NavbarComponent,
    FooterComponent
>>>>>>> home-paula
=======
    ContatoComponent
>>>>>>> contato-Carol
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
