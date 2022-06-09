import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './externo/login/login.component';
import { CadastroCompradorComponent } from './externo/cadastro/cadastro-comprador.component';
import { FeedCompradorAnunciosComponent } from './main-page/feed-comprador-anuncios.component';
import { routing } from './app.routing';
import { EsqueciComponent } from './externo/esqueci-senha/esqueci.component';
import { MeuPerfilComponent } from './interno/meu-perfil/meu-perfil.component';
import { CadastroAnuncioComponent } from './interno/cadastro-anuncio/cadastro-anuncio.component';
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
