import { AppFloatingConfigurator } from '@/app/layout/component/app.floatingconfigurator';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  authService = inject(Auth);
  router = inject(Router);

  email: string = '';
  password: string = '';
  checked: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  ingresar() {
    alert("INGRESANDO");
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigate(["/admin/perfil"]);
      },
      error: (err) => {
        console.error(err);
        alert("ERROR al autenticar! :( \n error: " + err.error.mensaje);
      }
    });
  }
}
