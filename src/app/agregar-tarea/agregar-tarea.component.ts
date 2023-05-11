import { Component } from '@angular/core';
import { tareaService } from '../service/tareas.services';
import { fechaService } from '../service/fechas.services';
import { horaService } from '../service/horas.services';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {
  text: string;
  results: string[];

  fecha: string;
  fechasr: string[];

  hora:string;
  horasr: string[];

  checked: false;
  constructor(private tareaservice: tareaService, private fechaservice: fechaService,private horaservice:horaService) {
    this.text = "";
    this.results = [];

    this.fecha = "";
    this.fechasr = [];

    this.hora = "";
    this.horasr=[];

    this.checked = false;
  }

  search(event: any) {
    this.results = this.tareaservice.search(event.query)
  }

  searchf(event: any) {
    this.fechasr = this.fechaservice.searchf(event.query)
  }

  searchh(event: any) {
    this.horasr = this.horaservice.searchh(event.query)
  }
}
