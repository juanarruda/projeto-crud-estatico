import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "./login.service";
import {EntidadeFormulario} from "../models/EntidadeFormulario";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  path = "/formulario/";
  constructor(private http: HttpClient) {
  }

  getFormCliente(id: number): Observable<EntidadeFormulario> {
    return this.http.get<EntidadeFormulario>(API_URL + this.path + id);
  }

  insertFormCliente(entidade:EntidadeFormulario){
    return this.http.post<EntidadeFormulario>(API_URL + this.path + 'inserir', entidade);
  }

  removerFormCliente(id:number) {
    return this.http.delete<EntidadeFormulario>(API_URL + this.path + id);
  }
}
