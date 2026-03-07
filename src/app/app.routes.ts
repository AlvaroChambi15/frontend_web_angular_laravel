import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Contactos } from './web/contactos/contactos';
import { Servicios } from './web/servicios/servicios';
import { AppLayout } from './layout/component/app.layout';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Inicio },
      { path: 'contactos', component: Contactos },
      { path: 'servicios', component: Servicios }
    ]
  }, {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: AppLayout,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
      }]
  }

];
