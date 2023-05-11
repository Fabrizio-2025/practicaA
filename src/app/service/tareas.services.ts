import { Injectable } from '@angular/core';
import { tareas } from '../entities/tareas.entity';

@Injectable()
export class tareaService {
  sugerencias: tareas[];


  constructor() {
    this.sugerencias = [
      { name: "sacar a pasear el cuy" },
      { name: "sacar a pasear al perro" },
      { name: "sacar a pasear al gato" }
    ]
  }

  search(keyword: string): string[] {
    let names: string[] = [];
    for (let i = 0; i < this.sugerencias.length; i++) {
      if (this.sugerencias[i].name.includes(keyword)) {
        names.push(this.sugerencias[i].name)
      }
    }
    return names;
  }

}
