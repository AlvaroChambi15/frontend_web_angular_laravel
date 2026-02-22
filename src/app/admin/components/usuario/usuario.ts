import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
})
export class Usuario {
  usuarioService = inject(UsuarioService);

  //usuarios: any[] = [];
  usuarios = signal<any[]>([]);

  usuarioForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  /*
  usuarios!: Observable<any[]>;

  constructor() {
    this.getUsuario();
  }

  getUsuario() {
    this.usuarios = this.usuarioService.listar();

  }
  */

  /*

  usuarios: any[] = [];

  constructor() {
    this.getUsuario();
  }


  getUsuario() {
    this.usuarioService.listar().subscribe(
      (respuesta: any) => {
        console.log(respuesta)
        //this.usuarios = respuesta as any[];
        this.usuarios = respuesta;
      }, (error) => {
        console.error(error)
      }
    )
  }*/

  constructor() {
    console.log("INICIANDO CONTRUCTOR");

    this.getUsuarios();
  }

  getUsuarios() {
    console.log("INICIANDO Función getUsuarios");

    this.usuarioService.listar().subscribe({
      next: (res: any) => {
        //this.usuarios = res;
        this.usuarios.set(res);
        console.log(res);

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  guardarUsuario() {
    this.usuarioService.guardar(this.usuarioForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.getUsuarios();
        this.usuarioForm.reset();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
