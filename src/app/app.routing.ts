import { Routes } from '@angular/router';

import {AuthGuardService} from './service/AuthGuard/auth-guard.service';

import { FullComponent } from './layouts/full/full.component';

import {LoginComponent} from './components/login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login',
    component: LoginComponent
  },
  
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/starter',
        pathMatch: 'full',
        canActivate: [AuthGuardService]
      },
      {
        path: '',
        loadChildren:
          './components/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './components/create-despachos/create-despachos.module#StarterModule',
        canActivate: [AuthGuardService]
      }
    ]
  }  
];
