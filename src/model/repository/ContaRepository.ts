import { Conta } from "../Conta";

export interface ContaRepository{

    //Métodos CRUD (create, read, update e delete)

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    procurarPorTitular (titular: string): void;

    // Métodos Bancários

    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}