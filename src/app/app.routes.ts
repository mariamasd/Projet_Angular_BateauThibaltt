import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gerant',
    loadComponent: () => import('./gerant/gerant.page').then((m) => m.GerantPage),
  },
  {
    path: 'bateaux',
    loadComponent: () => import('./bateaux/bateaux.page').then((m) => m.BateauxPage),
  },
  {
    path: 'deLaBrise',
    loadComponent: () => import('./de-la-brise/de-la-brise.page').then((m) => m.DeLaBrisePage),
  },
  {
    path: 'saphir',
    loadComponent: () => import('./saphir/saphir.page').then((m) => m.SaphirPage),
  },
  {
    path: 'gastMicher',
    loadComponent: () => import('./gast-micher/gast-micher.page').then((m) => m.GastMicherPage),
  },
  {
    path: 'aquilon',
    loadComponent: () => import('./aquilon/aquilon.page').then((m) => m.AquilonPage),
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./restaurants/restaurants.page').then((m) => m.RestaurantsPage),
  },
];
