import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroCompradorComponent } from './cadastro-comprador/cadastro-comprador.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { FeedCompradorAnunciosComponent } from './feed-comprador-anuncios/feed-comprador-anuncios.component';
import { FeedVendedorAnunciosComponent } from './feed-vendedor-anuncios/feed-vendedor-anuncios.component';
import { routing } from './app.routing';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCompradorComponent,
    CadastroVendedorComponent,
    FeedCompradorAnunciosComponent,
    FeedVendedorAnunciosComponent,
    EsqueciComponent,
    MeuPerfilComponent,
    CadastroAnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
