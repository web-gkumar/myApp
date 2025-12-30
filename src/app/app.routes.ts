import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  { path: 'tabs', component: TabsPage, children: [
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'farmers', loadComponent: () => import('./pages/farmers/farmers.component').then(m => m.FarmersComponent) },
    { path: 'buyers', loadComponent: () => import('./pages/buyers/buyers.component').then(m => m.BuyersComponent) },
    { path: 'category', loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent) },
    // { path: 'upload', loadComponent: () => import('./pages/upload/upload.component').then(m => m.UploadComponent) },
    { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ]
},
{ path: '', redirectTo: 'tabs', pathMatch: 'full' }
];
