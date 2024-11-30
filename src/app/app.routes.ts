import { Routes } from '@angular/router';
import { CartComponent } from './Page/cart/cart.component';
import { TabsComponent } from './components/tabs/tabs.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent, 
    children: [
      {
      path: 'home',
      loadComponent: () => import('./Page/home/home.page').then((m) => m.HomePage),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'contact',
      loadComponent: () => import('./Page/contact/contact.page').then( m => m.ContactPage)
    },
    {
      path: 'list-all',
      loadComponent: () => import('./Page/list-all/list-all.page').then( m => m.ListAllPage)
    },
    {
      path: 'list-bateaux',
      loadComponent: () => import('./Page/list-all/list-all.page').then( m => m.ListAllPage)
    },
    {
      path: 'produit',
      loadComponent: () => import('./Page/produit/produit.component').then(m => m.ProduitComponent)
    },
    {
      path: 'info-item',
      loadComponent: () => import('./Page/contact/contact.page').then( m => m.ContactPage)
    },
    { path: 'cart',
        component: CartComponent
    },
      
    ]
  },

];