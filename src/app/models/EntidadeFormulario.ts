import {Endereco} from "./Endereco";

export class EntidadeFormulario {

  idUsuario: number;
  usuario: string;
  senha: string;
  idPerfil: number;
  nomePerfil: string
  nomeCliente: string;
  sobrenome: string;
  dataNascimento: Date;
  telefone: string;
  cpf: string;
  rg: string;
  endereco: Endereco[];

  constructor(idUsuario?: number, usuario?: string, senha?: string, idPerfil?: number, nomePerfil?: string,
              nomeUsuario?: string, sobrenome?: string, dataNascimento?: Date, telefone?: string, cpf?: string,
              rg?: string, endereco?: Endereco[]) {
    this.idUsuario = idUsuario || 0;
    this.usuario = usuario || '';
    this.senha = senha || '';
    this.idPerfil = idPerfil || 0;
    this.nomePerfil = nomePerfil || '';
    this.nomeCliente = nomeUsuario || '';
    this.sobrenome = sobrenome || '';
    this.dataNascimento = dataNascimento || {} as Date;
    this.telefone = telefone || '';
    this.cpf = cpf || '';
    this.rg = rg || '';
    this.endereco = endereco || [];
  }
}
