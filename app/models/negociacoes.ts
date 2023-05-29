import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adicionar(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  listarNegociacoes(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
