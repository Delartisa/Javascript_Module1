// ESTRUTURAS CONDICIONAIS: SWITCH

/* 
1. permite criar blocos condicionais como o if, porem com estrutura que avalia uma expressao e testa o resultado contra varios casos, executando os casos correspondentes.

2. permite criar uma caso padrao (default), que sempre sera executado, independente da expressao.

3. permite pausar a execucao do codigo apos algum caso especifico

switch expressao
caso a: faca uma coisa
caso b: faca outra coisa e pare
caso c: faca mais outra coisa
por padrao: faca algo sempre

sintaxe:

switch (expressao) {
case "a":
    //...
    case "b":
       //...
       break
       case "c":
          //...
          default:
            //...
}
*/

// exemplo:

// entrada de dados oferecenndo opcoes para o user escolher
const option = prompt("Escolha uma alternativa: \n a)\n b)\n c)\n");

// inicializando as condicoes para os dados obtidos
switch(option){
    case "a":
        alert("Resultado: a");
        break;
        case "b":
            alert("Resultado: b");
            break;
            case "c":
                alert("Resultado: c");
                break;
                default:
                    alert("Encerrando o programa...");
};

