import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Perfil } from './components/perfil/perfil';
import { Usuario } from './components/usuario/usuario';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [
    Perfil,
    Usuario
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule
  ]
})
export class AdminModule { }
