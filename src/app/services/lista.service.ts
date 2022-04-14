import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from "./login.service";
import {EntidadeLista} from "../models/EntidadeLista";

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor(private http: HttpClient) { }

  getTabelaCliente(): Observable<EntidadeLista[]> {
    return this.http.get<EntidadeLista[]>(API_URL + '/lista');
  }

}
