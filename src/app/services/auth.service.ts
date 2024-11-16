import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Registrar un nuevo usuario
  register(email: string, password: string, username: string): Observable<any> {
    return new Observable((observer) => {
      const users = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Verificar si el correo ya está registrado
      if (users.some((user: any) => user.email === email)) {
        observer.error('El correo ya está registrado.');
        return;
      }

      const newUser = { email, password, username };

      // Guardar usuario en localStorage
      users.push(newUser);
      localStorage.setItem('usuarios', JSON.stringify(users));

      observer.next(newUser);
      observer.complete();
    });
  }

  // Iniciar sesión
  login(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      const users = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Buscar usuario
      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user)); // Guardar usuario logueado
        observer.next(user);
        observer.complete();
      } else {
        observer.error('Credenciales incorrectas.');
      }
    });
  }

  // Obtener el usuario logueado
  getUser(): Observable<any> {
    return new Observable((observer) => {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (user) {
        observer.next(user);
        observer.complete();
      } else {
        observer.error('No hay usuario logueado.');
      }
    });
  }

  // Cerrar sesión
  logout(): Observable<any> {
    return new Observable((observer) => {
      localStorage.removeItem('currentUser');
      observer.next(null);
      observer.complete();
    });
  }
}
