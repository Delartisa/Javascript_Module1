// Exercicio 01 | Calculadora de 4 operacoes

// entrada de dados com -prompt-
const firstNumber = prompt("Insira um numero qualquer:");
const secondNumber =  prompt("Escreva um segundo numero qualquer:");

// declarando variaveis e transformando os dados de entrada em number com -parseFloat-
const x = parseFloat(firstNumber);
const y = parseFloat(secondNumber);

// declarando variaveis para as operacoes e atribuindo seus respectivos calculos
let sum = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x / y;

// saida de dados com -alert-
alert("Resultados:\n\n" +
"Soma: " + sum + "\n" +
"Subtracao: " + subtraction + "\n" +
"Multiplicacao: " + multiplication + "\n" +
"Divisao: " + division);