import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Necesitamos importar NavController para la navegación

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private navController: NavController) { } // Inyectamos NavController

  ngOnInit() {
  }

  // Función para navegar a la página de calendario
  goToCalendar() {
    this.navController.navigateForward('/calendar'); // Redirige a la página 'calendar'
  }
}
