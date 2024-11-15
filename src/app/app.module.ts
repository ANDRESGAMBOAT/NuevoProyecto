import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Firebase 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// Formularios
import { FormsModule } from '@angular/forms';  // Si estás usando ngModel
import { ReactiveFormsModule } from '@angular/forms';  // Si estás usando formularios reactivos

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // Configurar Firebase con la configuración
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,   // Para autenticación
    AngularFirestoreModule,  // Para Firestore
    AngularFireStorageModule, // Para almacenamiento
    FormsModule,  // Para usar ngModel en formularios
    ReactiveFormsModule,  // Si estás usando formularios reactivos
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
