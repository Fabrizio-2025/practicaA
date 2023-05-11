import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';


import { tareaService } from './service/tareas.services';
import { fechaService } from './service/fechas.services';
import { horaService } from './service/horas.services';

import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSwitchModule } from 'primeng/inputswitch';

import { ActivityComponent } from './activity/activity.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    AgregarTareaComponent,
    ActivityComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    HttpClientModule

  ],
  providers: [tareaService,fechaService,horaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
