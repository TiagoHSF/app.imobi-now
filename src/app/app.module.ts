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
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FirstStepComponent } from './interno/first-step/first-step.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ComponentsComponent } from './components/components.component';
import { SelectorComponent } from './components/selector/selector.component';
import { EstadosComponent } from './components/selector/estados/estados.component';
import { TipoImovelComponent } from './components/selector/tipo-imovel/tipo-imovel.component';
import { QuotaComponent } from './components/selector/quota/quota.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NovidadesComponent } from './interno/novidades/novidades.component';
import { MatListModule } from '@angular/material/list';
import { LoginService } from './service/LoginService';
import { EmpresaComponent } from './interno/first-step/empresa/empresa.component';
import { TermosUsoComponent } from './interno/first-step/termos-uso/termos-uso.component';
import { ConvidarAmigoComponent } from './interno/first-step/convidar-amigo/convidar-amigo.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroCompradorComponent,
    FeedCompradorAnunciosComponent,
    EsqueciComponent,
    MeuPerfilComponent,
    CadastroAnuncioComponent,
    FirstStepComponent,
    ComponentsComponent,
    SelectorComponent,
    EstadosComponent,
    TipoImovelComponent,
    QuotaComponent,
    NovidadesComponent,
    EmpresaComponent,
    TermosUsoComponent,
    ConvidarAmigoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
