import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FotoComponent } from './foto/foto.component';

import { FotolistComponent } from './fotolist/fotolist.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NegritoComponent } from './negrito/negrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoComponent,
    FotolistComponent,
    FormularioComponent,
    ClienteComponent,
    NegritoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
