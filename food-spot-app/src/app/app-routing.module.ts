import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurantes/Restaurantes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'restaurantes/:id',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'procurar/:id',
    loadChildren: () => import('./procurar/procurar.module').then( m => m.ProcurarPageModule)
  },
  {
    path: 'login/:id',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pedidos/:id',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'cadastro/:id',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'detalhe/:id',
    loadChildren: () => import('./detalhe/detalhe.module').then( m => m.DetalhePageModule)
  },
  {
    path: 'cadastro-restaurante/:id',
    loadChildren: () => import('./cadastro-restaurante/cadastro-restaurante.module').then( m => m.CadastroRestaurantePageModule)
  },
  {
    path: 'cadastro-prato/:id',
    loadChildren: () => import('./cadastro-prato/cadastro-prato.module').then( m => m.CadastroPratoPageModule)
  },
  {
    path: 'cardapio/:id',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
