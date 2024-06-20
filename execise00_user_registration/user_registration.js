// Exercicio 00 | Cadastro de recrutas

// entrada de dados com -prompt-
const firstName = prompt("Escreva seu primeiro nome:");
const lastName = prompt("Escreva seu sobrenome:");
const studyArea = prompt("Escreva sua area de estudo:");
const birthDate = parseFloat(prompt("Escreva o ano em que nasceu:"));

// saida de dados com -alert-
alert( "Dados do recruta:\n\n" +
"Nome: " + firstName + " " + lastName + "\n" +
"Campo de estudo: " + studyArea + "\n" +
"Idade: " + (2024 - birthDate));