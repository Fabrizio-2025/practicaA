import { Injectable } from '@angular/core';
import { fechas } from '../entities/fechas.entity';

@Injectable()
export class fechaService {
  sugerencias: fechas[];


  constructor() {
    this.sugerencias = [
      { name: "07/05/2023" },
      { name: "17/05/2022" },
      { name: "23/02/2021" }
    ]
  }

  searchf(keyword: string): string[] {
    let names: string[] = [];
    for (let i = 0; i < this.sugerencias.length; i++) {
      if (this.sugerencias[i].name.includes(keyword)) {
        names.push(this.sugerencias[i].name)
      }
    }
    return names;
  }

}
