import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {ListaService} from "../../services/lista.service";
import {EntidadeLista} from "../../models/EntidadeLista";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  providers: [DatePipe]
})
export class ListaComponent implements OnInit {

  tabelaCliente: EntidadeLista[] = [];

  selectedProducts: any[] = [];

  modalVisivel = false;

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.listaService.getTabelaCliente().subscribe(resposta=>{
      this.tabelaCliente = resposta;
    })
  }


  openNew(){
    this.modalVisivel = true;
  }

  deleteSelectedProducts(){

  }

  editarUsuario(usuario:EntidadeLista){
    
    this.modalVisivel = true;
  }

  deletarUsuario(usuario:EntidadeLista){}

  applyFilterGlobal($event: any, stringVal: any, lista: Table) {
     lista.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  confirmacaoModal(evento:any){
    this.modalVisivel = false;
    console.log(evento);
  }

  limparTabela(table: Table) {
    table.clear();
  }
}
