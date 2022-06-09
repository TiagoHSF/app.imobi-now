import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CadastroCompradorComponent } from './externo/cadastro/cadastro-comprador.component';
import { FeedCompradorAnunciosComponent } from './main-page/feed-comprador-anuncios.component';
import { LoginComponent } from './externo/login/login.component';
import { EsqueciComponent } from './externo/esqueci-senha/esqueci.component';
import { MeuPerfilComponent } from './interno/meu-perfil/meu-perfil.component';
import { CadastroAnuncioComponent } from './interno/cadastro-anuncio/cadastro-anuncio.component';

const app_routes: Routes = [
  { path: 'cadastro-comprador', component: CadastroCompradorComponent },
  { path: 'feed-comp-ads', component: FeedCompradorAnunciosComponent },
  { path: 'esqueci', component: EsqueciComponent },
  { path: 'meu-perfil', component: MeuPerfilComponent },
  { path: 'cadastro-anuncio', component: CadastroAnuncioComponent },
  { path: '', component: LoginComponent },
];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(app_routes);
