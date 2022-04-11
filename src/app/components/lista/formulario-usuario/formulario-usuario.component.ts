import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  visivel:boolean = false;

  @Output()
  confirmacaoModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarModal(){
    this.visivel = true;
  }

  confirmaBotao(){
    this.visivel = false;
    this.confirmacaoModal.emit("confirmado")
  }
}
