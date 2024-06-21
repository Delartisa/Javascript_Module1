// exercicio 07 | Controle financeiro

alert("Bem vindo ao banco BNINE!");

// declarando variaveis para armazenar o valor do dinheiro
let cash = parseFloat(prompt("Qual e seu saldo atual?"));
let option = ""

// inicializando o menu de opcoes
do{ option = prompt("Saldo disponivel: " + cash + "\n\n" +
    "Opcoes:\n" +
    "a) Depositar\n" +
    "b) Sacar\n" +
    "c) Sair\n");

    switch(option){ // inicializando condicoes para os dados obtidos
        case "a":
        cash += parseFloat(prompt("Qual e o valor do deposito?"))
        alert("Deposito feito com sucesso!");
        break;
        case "b":
        cash -= parseFloat(prompt("Qual e o valor do saque?"))
        alert("Saque feito com sucesso!")
        break;
        default:
        alert("Opcao invalida!")
    }
} while (option !== "c") // condicao para quebrar blocos de comandos caso selecionada

alert("Encerrando programa...")