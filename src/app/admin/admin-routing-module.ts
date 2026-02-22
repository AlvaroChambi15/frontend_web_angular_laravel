import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Perfil } from './components/perfil/perfil';
import { Usuario } from './components/usuario/usuario';

const routes: Routes = [
  { path: 'perfil', component: Perfil },
  { path: 'usuario', component: Usuario },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
