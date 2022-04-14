import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from "./components/home/home.component";
import {ListaComponent} from './components/lista/lista.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {FormularioClienteComponent} from './components/formulario-cliente/formulario-cliente.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {PasswordModule} from "primeng/password";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
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
    BrowserAnimationsModule,
    PasswordModule,
    DividerModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    CalendarModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListaComponent,
    FormularioClienteComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
