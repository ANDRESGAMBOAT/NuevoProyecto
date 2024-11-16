import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [],  // Inicialmente vacío
    dateClick: this.handleDateClick.bind(this),  // Llamar a nuestra función cuando un día es clickeado
  };

  appointmentTime: string = '';
  appointmentDescription: string = '';
  selectedBarber: string = '';
  barbers: string[] = ['Barbero 1', 'Barbero 2', 'Barbero 3'];
  selectedDate: string = '';
  showForm: boolean = false;

  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;

  constructor() {}

  handleDateClick(arg: DateClickArg) {
    // Cambiar la fecha seleccionada y mostrar el formulario
    this.selectedDate = arg.dateStr;
    this.showForm = true;

    // Limpiar los campos del formulario
    this.appointmentDescription = '';
    this.selectedBarber = '';
    this.appointmentTime = '';
  }

  addAppointment() {
    // Agregar una nueva cita al calendario
    if (this.selectedDate && this.appointmentTime && this.appointmentDescription && this.selectedBarber) {
      const newEvent = {
        title: 'Cita con el barbero',
        start: new Date(this.selectedDate + 'T' + this.appointmentTime),
        description: this.appointmentDescription,
        barber: this.selectedBarber,
        extendedProps: { barber: this.selectedBarber }
      };

      // Accedemos a la API de FullCalendar
      const calendarApi = this.fullcalendar?.getApi();
      if (calendarApi) {
        // Agregar evento utilizando la API
        calendarApi.addEvent(newEvent);

        // Limpiar formulario y ocultar
        this.showForm = false;
        console.log('Cita agregada:', newEvent);
      }
    }
  }

  cancelAppointment() {
    // Cancelar la cita y cerrar el formulario
    this.showForm = false;
  }
}
