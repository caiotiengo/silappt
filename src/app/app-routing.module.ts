import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./pages/marketplace/marketplace.module').then( m => m.MarketplacePageModule)
  },
  {
    path: 'treinos',
    loadChildren: () => import('./pages/treinos/treinos.module').then( m => m.TreinosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'rafateam',
    loadChildren: () => import('./pages/rafateam/rafateam.module').then( m => m.RafateamPageModule)
  },
  {
    path: 'treino/:id',
    loadChildren: () => import('./pages/treino/treino.module').then( m => m.TreinoPageModule)
  },
  {
    path: 'passos-treino',
    loadChildren: () => import('./modal/passos-treino/passos-treino.module').then( m => m.PassosTreinoPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./pages/diario/diario.module').then( m => m.DiarioPageModule)
  },
  {
    path: 'mkt-item',
    loadChildren: () => import('./modal/mkt-item/mkt-item.module').then( m => m.MktItemPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
