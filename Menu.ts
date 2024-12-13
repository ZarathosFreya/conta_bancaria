import readlinesync = require("readline-sync");
import { colors } from './util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main(){

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Andressa", 500000);
    conta.visualizar(); 
    conta.sacar(500001); 
    conta.visualizar(); 
    conta.depositar(7500); 
    conta.visualizar(); 

    const c1 = new ContaCorrente(1000, 1, 123, 1, "Olivia", 100000);
        c1.visualizar();
        c1.sacar(100500);
        c1.visualizar();
        c1.depositar(2000);
        c1.visualizar();

        console.log('');
    
    const c2 = new ContaPoupanca(28111965, 3, 456, 2, "Marineide", 300000);
    c2.visualizar();
    c2.sacar(1500);
    c2.visualizar();
    c2.depositar(3000);
    c2.visualizar();

    console.log('');

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
            
                keyPress()
            break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
            break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por numero\n\n", colors.reset);
            
                keyPress()
            break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
            
                keyPress()
            break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
            break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);
                
                keyPress()
            break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDeposito\n\n", colors.reset);
                
                keyPress()
            break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia entre Contas\n\n", colors.reset);

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