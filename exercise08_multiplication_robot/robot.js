// exercicio 08 | Robo da tabuada

let number = parseFloat(prompt("Escreva um numero para montarmos sua tabuada:"));
let result = "";

for(let i = 0; i <= 20; i++){
    result += (number + " * " + i + " = " + (number * i) + "\n");
}

alert("Tabuada do " + number + "\n\n" + result);