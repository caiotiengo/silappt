import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'marketplace',
        loadChildren: () => import('../pages/marketplace/marketplace.module').then(m => m.MarketplacePageModule)
      },
      {
        path: 'treinos',
        loadChildren: () => import('../pages/treinos/treinos.module').then(m => m.TreinosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pages/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'diario',
        loadChildren: () => import('../pages/diario/diario.module').then(m => m.DiarioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/marketplace',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/marketplace',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
