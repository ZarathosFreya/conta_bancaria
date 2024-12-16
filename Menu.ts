import readlinesync = require("readline-sync");
import { colors } from './util/Colors';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main(){

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 10000.00, 1, 1234,'Amanda Magro', 1000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1000.00, 2, 4578,'João da Silva', 1500));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 10, 1, 5789, "Geana Almeida", 1));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 15, 2, 5698, "Jean Lima", 2));

    while(true){

        console.log(colors.bg.white, colors.fg.red,
                    "***********************************************************");
        console.log("                                                           ");
        console.log("                       * CYNSEC BANK *                     ");
        console.log("                                                           ");
        console.log("***********************************************************");
        console.log("                                                           ");
        console.log("                 1 - Criar Conta                           ");
        console.log("                 2 - Listar todas as Contas                ");
        console.log("                 3 - Buscar Conta por Numero               ");
        console.log("                 4 - Atualizar Dados da Conta              ");
        console.log("                 5 - Apagar Conta                          ");
        console.log("                 6 - Sacar                                 ");
        console.log("                 7 - Depositar                             ");
        console.log("                 8 - Transferir valores entre Contas       ");
        console.log("                 9 - Sair                                  ");
        console.log("                                                           ");
        console.log("***********************************************************");
        console.log("                                                           ",
        colors.reset);

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9){
            console.log(colors.fg.bluestrong,
                "\n CynSec Bank - Mais fácil que nunca, mais perto de você. ");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log("Digite o Numero da Agencia: ");
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o Numero do Titular: ");
                    titular = readlinesync.question('');

                    console.log("Escolha o Tipo da Conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                    console.log("Digite o Saldo da Conta: ");
                    saldo = readlinesync.questionFloat('');

                    switch(tipo){
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.cadastrar(new ContaCorrente(limite, contas.gerarNumero(), agencia, tipo, titular, saldo))
                        break;
                        case 2:
                            console.log("Digite o Dia do Aniversario da Poupanca: ");
                            aniversario = readlinesync.questionInt('');
                            contas.cadastrar(new ContaPoupanca(aniversario, contas.gerarNumero(), agencia, tipo, titular, saldo))
                        break;
                    }

                keyPress()
            break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();

                keyPress()
            break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por numero\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt('');

                    contas.procurarPorNumero(numero);
            
                keyPress()
            break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt('');

                    let conta = contas.buscarNoArray(numero);

                    if(conta !== null){

                    console.log("Digite o novo Numero da Agencia: ");
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o novo Numero do Titular: ");
                    titular = readlinesync.question('');

                    console.log("Escolha o Tipo da Conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                    console.log("Digite o novo Saldo da Conta: ");
                    saldo = readlinesync.questionFloat('');

                    tipo= conta.tipo;

                    switch(tipo){
                        case 1:
                            console.log("Digite o novo Limite da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.atualizar(new ContaCorrente(limite, numero, agencia, tipo, titular, saldo))
                        break;
                        case 2:
                            console.log("Digite o novo Dia do Aniversario da Poupanca: ");
                            aniversario = readlinesync.questionInt('');
                            contas.atualizar(new ContaPoupanca(aniversario, numero, agencia, tipo, titular, saldo))
                        break;
                    }
                    }else{
                        console.log("Conta não encontrada!");
                    }
            
                keyPress()
            break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt('');

                    contas.deletar(numero);

                keyPress()
            break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o valor do Saque: ");
                    valor = readlinesync.questionFloat('');

                    contas.sacar(numero, valor);
                
                keyPress()
            break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDeposito\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o valor do Deposito: ");
                    valor = readlinesync.questionFloat('');

                    contas.depositar(numero, valor);
                
                keyPress()
            break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia entre Contas\n\n", colors.reset);

                    console.log("Digite o numero da Conta Origem : ");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o numero da Conta Destino : ");
                    numeroDestino = readlinesync.questionInt('');

                    console.log("Digite o valor da Transferencia: ");
                    valor = readlinesync.questionFloat('');

                    contas.transferir(numero, numeroDestino, valor);

                keyPress()
            break;
            default:
                console.log(colors.fg.whitestrong,
                    "\n\nOpcao Invalida!\n\n", colors.reset);
                
                keyPress()
            break;
        }
        
    }
}
export function sobre(): void{
    console.log("\n***********************************************************");
    console.log("Projeto Desenvolvido por: Andressa Neves");
    console.log("Generation Brasil - andressas@genstudents.org");
    console.log("github.com/ZarathosFreya/");
    console.log("\n***********************************************************");
}
function keyPress(): void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();