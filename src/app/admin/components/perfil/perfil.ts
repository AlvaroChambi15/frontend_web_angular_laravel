import { Auth } from '@/app/auth/services/auth';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {

  authService = inject(Auth);

  perfil = signal<any>(undefined);

  constructor() {
    this.funGetPerfil();
  }

  funGetPerfil() {
    this.authService.perfil().subscribe({
      next: (respuesta: any) => {
        this.perfil.set(respuesta);
      },
      error: (error) => {
        console.log("Error al mostrar datos del perfil");

      }
    })
  }

}
