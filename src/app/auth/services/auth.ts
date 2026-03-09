import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Perfil } from '../../admin/components/perfil/perfil';

interface Credencial {
  email: String,
  password: String
}

@Injectable({
  providedIn: 'root',
})
export class Auth {

  urlBase: string = "http://127.0.0.1:8000/api";
  http = inject(HttpClient)

  login(credenciales: any) {
    return this.http.post(`${this.urlBase}/v1/auth/login`, credenciales)
  }

  register(datos: any) {
    return this.http.post(`${this.urlBase}/v1/auth/register`, datos)
  }

  perfil() {
    return this.http.get(`${this.urlBase}/v1/auth/profile`, { headers: { Authorization: 'Bearer 6|GYMBzLXZNRfqTU3hDfoWAYwRjTdBr45u2Zxh1QIBbfc4046a' } })
  }

  logout() {
    return this.http.post(`${this.urlBase}/v1/auth/logout`, {})
  }
}
