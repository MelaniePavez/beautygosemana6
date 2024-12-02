import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'productos',
        loadChildren: () => import('../tabs/productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('../tabs/galeria/galeria.module').then(m => m.GaleriaPageModule)
      },
      // Ruta para el tab 'consejos'
      {
        path: 'consejos',
        loadChildren: () => import('../tabs/consejos/consejos.module').then(m => m.ConsejosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/productos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
