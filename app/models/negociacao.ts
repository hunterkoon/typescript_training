export class Negociacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get date(): Date {
    const data = new Date(this.data.getTime());
    return data;
  }
}
