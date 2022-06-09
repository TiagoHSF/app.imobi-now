import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroCompradorComponent } from './cadastro-comprador/cadastro-comprador.component';
import { FeedCompradorAnunciosComponent } from './feed-comprador-anuncios/feed-comprador-anuncios.component';
import { routing } from './app.routing';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCompradorComponent,
    FeedCompradorAnunciosComponent,
    EsqueciComponent,
    MeuPerfilComponent,
    CadastroAnuncioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, routing, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
