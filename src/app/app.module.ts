import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar formularios
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule para peticiones HTTP

@NgModule({
  declarations: [AppComponent], // Declarar el componente principal
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FullCalendarModule, // Importar el módulo de FullCalendar
    FormsModule, // Usar ngModel en formularios
    ReactiveFormsModule, // Usar formularios reactivos
    HttpClientModule, // Habilitar peticiones HTTP
  ],
  bootstrap: [AppComponent] // El componente principal se usa como el bootstrap
})
export class AppModule {}
