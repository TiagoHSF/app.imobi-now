import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CadastroCompradorComponent } from './cadastro-comprador/cadastro-comprador.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { FeedCompradorAnunciosComponent } from './feed-comprador-anuncios/feed-comprador-anuncios.component';
import { FeedVendedorAnunciosComponent } from './feed-vendedor-anuncios/feed-vendedor-anuncios.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';


const app_routes: Routes = [
    { path: 'cadastro-comprador', component: CadastroCompradorComponent},
    { path: 'cadastro-vendedor', component: CadastroVendedorComponent},
    { path: 'feed-comp-ads', component: FeedCompradorAnunciosComponent},
    { path: 'feed-vend-cads', component: FeedVendedorAnunciosComponent},
    { path: 'esqueci', component: EsqueciComponent},
    { path: '', component: LoginComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(app_routes);