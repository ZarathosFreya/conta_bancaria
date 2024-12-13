import {Conta} from "./Conta"

export class ContaCorrente extends Conta{

    private _limite: number;


	constructor(limite: number, numero: number, agencia: number, tipo: number, titular: string,
        saldo: number) {
		super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
	}

	public get limite(): number {
		return this._limite;
	}
	public set limite(value: number) {
		this._limite = value;
	}
    public sacar(valor: number): boolean {
        if (valor > (this.saldo + this._limite)){
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo -= valor;
        return true;
    }
    public visualizar(){
        super.visualizar();
        console.log(`Limite da Conta: ${this._limite.toFixed(2)}`);
    }
}