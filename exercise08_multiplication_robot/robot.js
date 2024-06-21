// exercicio 08 | Robo da tabuada

// entrada de dados
let number = parseFloat(prompt("Escreva um numero para montarmos sua tabuada:"));
let result = ""; // variavel para armazenar o resultado

for(let i = 0; i <= 20; i++){ // declarando contador
    result += (number + " * " + i + " = " + (number * i) + "\n");
}

// saida de dados
alert("Tabuada do " + number + "\n\n" + result);