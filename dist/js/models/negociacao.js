export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get date() {
        const data = new Date(this.data.getTime());
        return data;
    }
}
