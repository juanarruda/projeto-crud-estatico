export class Endereco {
  idEndereco: number;
  nomeEndereco: string;
  cep: string;
  bairro: string;
  estado: string;
  isPrincipal: boolean;
  idUsuario?: number;

  constructor(idEndereco: number, nomeEndereco: string, cep: string, bairro: string, estado: string, isPrincipal: boolean, idUsuario?: number) {
    this.idEndereco = idEndereco;
    this.nomeEndereco = nomeEndereco;
    this.cep = cep;
    this.bairro = bairro;
    this.estado = estado;
    this.isPrincipal = isPrincipal;
    this.idUsuario = idUsuario;
  }
}
