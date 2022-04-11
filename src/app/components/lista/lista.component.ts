import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios = [{nome:'aaaa', dataNascimento:11111999, cpf: 12467823105, rg:1234567, telefone:123131321, endereco:'adadasdada'},
    {nome:'bbbb', dataNascimento:240508515, cpf: 1246786467 , rg:1234987, telefone:123131321, endereco:'adadasdada'}]

  selectedProducts: any[] = [];

  modalVisivel = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNew(){this.modalVisivel = true;}

  deleteSelectedProducts(){}

  editarUsuario(usuario:any){this.modalVisivel = true;}

  deletarUsuario(usuario:any){}

  applyFilterGlobal($event: any, stringVal: any, lista: Table) {
     lista.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  confirmacaoModal(evento:any){
    this.modalVisivel = false;
    console.log(evento);
  }

  clear(table: Table) {
    table.clear();
  }
}
