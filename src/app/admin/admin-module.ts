import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Perfil } from './components/perfil/perfil';
import { Usuario } from './components/usuario/usuario';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Perfil,
    Usuario
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
