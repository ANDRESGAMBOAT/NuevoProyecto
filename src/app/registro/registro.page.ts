import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.email, this.password, this.username).subscribe(
      (user) => {
        console.log('Usuario registrado exitosamente:', user);
        localStorage.setItem('currentUser', JSON.stringify(user)); // Guardar usuario logueado
        this.router.navigate(['/login']); // Redirigir a la página de login
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
