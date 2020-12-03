import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./sign-in/sign-in.module').then(mod => mod.SignInModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./sign-up/sign-up.module').then(mod => mod.SignUpModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then(mod => mod.DocumentModule)
  }
]