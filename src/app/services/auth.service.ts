import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Registrar un nuevo usuario con correo electrónico y contraseña
  register(email: string, password: string, username: string): Observable<any> {
    return new Observable((observer) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            // Aquí puedes guardar el username en Firestore u otra base de datos
            user.updateProfile({
              displayName: username
            }).then(() => {
              observer.next(user);  // Emitir usuario registrado
              observer.complete();
            }).catch(error => {
              observer.error(error);  // En caso de error al actualizar el perfil
            });
          }
        })
        .catch((error) => {
          observer.error(error);  // Error al crear el usuario
        });
    });
  }

  // Iniciar sesión
  login(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          observer.next(userCredential.user);  // Emitir usuario logueado
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);  // Error al iniciar sesión
        });
    });
  }

  // Cerrar sesión
  logout(): Observable<any> {
    return new Observable((observer) => {
      this.afAuth.signOut()
        .then(() => {
          observer.next(null);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  // Obtener el estado de autenticación actual
  getUser(): Observable<any> {
    return this.afAuth.authState;
  }
}
