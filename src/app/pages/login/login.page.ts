import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Ruta correcta dependiendo de tu estructura de carpetas
import { Router } from '@angular/router';  // Para redirigir después de un login exitoso
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Para manejar el formulario reactivo

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;  // Definir el formulario reactivo

  constructor(
    private authService: AuthService,  // Inyectamos el AuthService
    private router: Router,  // Inyectamos el Router para redirigir después del login
    private formBuilder: FormBuilder  // Inyectamos el FormBuilder para crear el formulario
  ) { 
    console.log('Página Login Iniciada');
    // Inicializamos el formulario
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  // Validamos que el correo sea obligatorio y tenga formato correcto
      password: ['', [Validators.required, Validators.minLength(6)]],  // Validamos que la contraseña sea obligatoria y tenga mínimo 6 caracteres
    });
  }


  // Función para manejar el login
  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      (user) => {
        console.log('Usuario logueado exitosamente', user);
        this.router.navigate(['/home']);  // Redirigir a la página de inicio (cambia 'home' por la ruta deseada)
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }
}
