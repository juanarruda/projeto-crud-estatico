// @ts-nocheck
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {EntidadeFormulario} from "../../models/EntidadeFormulario";
import {PerfilEnum} from "../../enums/PerfilEnum";
import {FormularioService} from "../../services/formulario.service";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {MustMatch} from "../../helpers/MustMatch";
import {MessageService} from "primeng/api";
import {CryptoHelper} from "../../helpers/Crypto.js";
import {chaveCrypto} from "../../services/login.service";


const enderecoForm = new FormGroup({
  nomeEndereco: new FormControl('', Validators.required),
  cep: new FormControl('', Validators.required),
  bairro: new FormControl('', Validators.required),
  estado: new FormControl('', Validators.required),
  isPrincipal: new FormControl(false),
})

@Component({
  selector: 'formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss'],
  providers: [MessageService]
})
export class FormularioClienteComponent implements OnInit {

  @Input()
  visivel:boolean = false;

  @Input()
  idCliente:number = 0;

  @Output()
  confirmacaoModal = new EventEmitter<string>();

  isEdicao:boolean = false;

  listaObjetos:any[] = [];

  public Form: FormGroup;


  entidadeFormulario: EntidadeFormulario = new EntidadeFormulario();

  constructor(
    private formularioService: FormularioService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getPerfis();
    this.Form = new FormGroup({
      nomeCliente: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', [Validators.minLength(6), this.isEdicao ? Validators.nullValidator : Validators.required]),
      confirmarSenha: new FormControl('', this.isEdicao ? Validators.nullValidator : Validators.required),
      idPerfil: new FormControl('', Validators.required),
      endereco: new FormArray( [ enderecoForm ])
    }, {
      validators: MustMatch
    });

 /* this.verificadorEdicao()*/
  }

  salvarFormulario(){
    this.entidadeFormulario.nomeCliente = this.Form.get("nomeCliente").value;
    this.entidadeFormulario.sobrenome = this.Form.get("sobrenome").value;
    this.entidadeFormulario.dataNascimento = this.Form.get("dataNascimento").value;
    this.entidadeFormulario.telefone = this.Form.get("telefone").value;
    this.entidadeFormulario.cpf = this.Form.get("cpf").value;
    this.entidadeFormulario.rg = this.Form.get("rg").value;
    this.entidadeFormulario.usuario = this.Form.get("usuario").value;
    this.entidadeFormulario.senha = CryptoJS.AES.encrypt(this.Form.get("senha").value,chaveCrypto).toString();
    this.entidadeFormulario.idPerfil = +this.Form.get("idPerfil").value;
    this.entidadeFormulario.endereco = this.Form.get("endereco").value;
  }

  inserirFormulario(){
    this.Form.controls["nomeCliente"].setValue(this.entidadeFormulario.nomeCliente);
    this.Form.controls["sobrenome"].setValue(this.entidadeFormulario.sobrenome);
    this.Form.controls["dataNascimento"].setValue(this.entidadeFormulario.dataNascimento);
    this.Form.controls["telefone"].setValue(this.entidadeFormulario.telefone);
    this.Form.controls["cpf"].setValue(this.entidadeFormulario.cpf);
    this.Form.controls["rg"].setValue(this.entidadeFormulario.rg);
    this.Form.controls["usuario"].setValue(this.entidadeFormulario.usuario);
    this.Form.controls["senha"].setValue(this.entidadeFormulario.senha);
    this.Form.controls["idPerfil"].setValue(this.entidadeFormulario.idPerfil);
    this.Form.controls["endereco"].setValue(this.entidadeFormulario.endereco);
  }

  get f() { return this.Form.controls; }

  get enderecoF(): FormArray {
    return this.Form.get('endereco') as FormArray;
  }

  adicionarEndereco() {
    this.enderecoF.push(enderecoForm);
  }

  removeEndereco(index: number) {
    this.enderecoF.removeAt(index);
  }

  limparEndereco() {
    this.enderecoF.clear();
  }

  resetForm() {
    /*this.Form.controls["firstName"].setValue(this.person.firstName);
    this.Form.controls["lastName"].setValue(this.person.lastName);*/
    // @ts-ignore
    this.Form.reset();
  }

  verificadorEdicao(){
    if(this.idCliente != 0){
      this.isEdicao = true;
      this.formularioService.getFormCliente(this.idCliente).subscribe(resposta => {
        this.entidadeFormulario = resposta;
      })
    }
  }

  getPerfis(){

    for (const [propertyKey, propertyValue] of Object.entries(PerfilEnum)) {
      if (!Number.isNaN(Number(propertyKey))) {
        continue;
      }
      this.listaObjetos.push({ id: propertyValue.toString(), nome: propertyKey });
    }
  }

  cancelaBotao(){
    this.visivel = false;
    this.confirmacaoModal.emit("fechado");
  }

  confirmaBotao(){
    if (this.Form.invalid) {
        this.messageService.add({severity:'error', summary:'Erro', detail:'Todos os campos são obrigatórios ' +
            'e a senha deve conter no minimo 6 caracteres e ser igual na verificação'});
    } else {
      this.salvarFormulario();
      this.formularioService.insertFormCliente(this.entidadeFormulario).subscribe(resposta => {
        console.log(resposta);
      }
      );
      console.log(this.entidadeFormulario);
      this.confirmacaoModal.emit();
      this.visivel = false;
    }
  }

  limpar(){
    this.idCliente = 0;
    this.isEdicao = false;
    this.visivel = false;
    this.resetForm();
  }
}
