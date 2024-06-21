// exercicio 06 | Menu interativo

// incializando variavel para armazenar a opcao
let option = ""

// inicializando o menu de opcoes
do{
    option = prompt("Selecione uma opcao:\n\n a) opt 1\n b) opt 2\n c) opt 3\n d) opt 4\n e) Sair"); // opcoes

    switch(option){ // condicao (ex: se for a, mostra a mensagem de a e mostra novamente o menu)
        case "a":
            alert("Opcao selecionada: a");
            break;
            case "b":
                alert("Opcao selecionada: b");
                break;
                case "c":
                    alert("Opcao selecionada: c");
                    break;
                    case "d":
                        alert("Opcao selecionada: d");
                        break;
                        case "e":
                            alert("Opcao selecionada: e");
                            break;
                            default:
                                alert("Opcao invalida!");
                                break;
    }

} while(option !== "e"); // condicao para quebrar blocos de comandos caso selecionada

alert("Encerrando programa...")

   