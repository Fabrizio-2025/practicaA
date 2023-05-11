import { Injectable } from '@angular/core';
import { hora } from '../entities/horas.entity';

@Injectable()
export class horaService {
  sugerencias: hora[];


  constructor() {
    this.sugerencias = [
      { name: "23:00" },
      { name: "10:00" },
      { name: "21:00" },
      { name: "09:00" },
      { name: "15:00" }
    ]
  }

  searchh(keyword: string): string[] {
    let names: string[] = [];
    for (let i = 0; i < this.sugerencias.length; i++) {
      if (this.sugerencias[i].name.includes(keyword)) {
        names.push(this.sugerencias[i].name)
      }
    }
    return names;
  }

}
