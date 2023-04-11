import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './components/guard/guard.guard';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/productos/productos.module').then(
        (module) => module.ProductosModule
      ),
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then(
        (module) => module.AboutModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/shopguard/shopguard.module').then(
        (module) => module.ShopguardModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./modules/favorites/favorites.module').then(
        (module) => module.FavoritesModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./modules/form/form.module').then(
        (module) => module.FormModule
      ),
  },

  // {
  //   path: 'help',
  //   loadChildren: () =>
  //     import('./modules/shopguard/shopguard.module').then(
  //       (module) => module.ShopguardModule
  //     ),
  //   canActivate: [GuardGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
