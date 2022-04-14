
export class EntidadeLista {
  idUsuario: number;
  nomeCliente: string;
  dataNascimento: Date;
  telefone: string;
  cpf: string;
  rg: string;
  cep: string;
  nomeEndereco: string;

  constructor(idUsuario: number, nomeCliente: string, dataNascimento: Date, cpf: string, rg: string,
              telefone: string, cep: string, nomeEndereco: string) {
    this.idUsuario = idUsuario;
    this.nomeCliente = nomeCliente;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.rg = rg;
    this.telefone = telefone;
    this.cep = cep;
    this.nomeEndereco = nomeEndereco;
  }
}
