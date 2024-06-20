// exercicio 04 | Conversor de medidas 

// entrada de dados
const measure = parseFloat(prompt("Escreva a medida que voce quer converter (em metros):"));
const option = prompt("Escolha para qual medida voce deseja mudar:\n\n a) milimetro\n b) centimetro\n c) decimetro\n d) decametro\n e) hectometro\n f) quilometro\n");

// inicializando condicoes para os dados obtidos
switch(option){
    case "a":
        alert(measure + "m convertido para milimetro e igual a " + (measure * 1000) + "mm.");
        break;
        case "b":
            alert(measure + "m convertido para centimetro e igual a " + (measure * 100) + "cm.");
            break;
            case "c":
                alert(measure + "m convertido para decimetro e igual a " + (measure * 10) + "dm.");
                break;
                case "d":
                    alert(measure + "m convertido para decametro e igual a " + (measure / 10) + "dam.");
                    break;
                    case "e":
                        alert(measure + "m convertido para hectometro e igual a " + (measure / 100) + "hm.");
                        break;
                        case "f":
                            alert(measure + "m convertido para quilometro e igual a " + (measure / 1000) + "km.");
                            break;
                            default:
                                alert("Opcao invalida!");
                                break;
}