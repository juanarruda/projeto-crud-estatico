import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from "./components/home/home.component";
import { ListaComponent } from './components/lista/lista.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import { FormularioUsuarioComponent } from './components/lista/formulario-usuario/formulario-usuario.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    // Primeng
    ButtonModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    RippleModule,
    ToolbarModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListaComponent,
    FormularioUsuarioComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
