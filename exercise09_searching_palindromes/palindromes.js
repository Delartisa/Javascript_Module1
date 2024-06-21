// exercicio 09 | Procurando palindromos

// entrada de dados e declarando variaveis para a palavra e a palavra invertida
const word = prompt("Escreva uma palavra e verificaremos se ela e um palindromo ou nao:")
let invertedWord = ""

// para -> i = tamanho da palavra inserida -1 (pois supondo que a palavra seja macarrao, ela possui tamanho 8, mas nos sabemos que em questao de posicao, ela vai de a 7) | condicao -> 1 menor ou igual a zero e i-- para contar letra por letra
for(let i = word.length - 1; i >= 0; i--){
    invertedWord += word[i] // variavel para receber a palavra invertida
}

// saida de dados
if (word === invertedWord){
    alert("Parabens! a palavra " + word + " e palindroma de " + invertedWord + "!")
} else {
    alert("A palavra " + word + " nao e palindroma de " + invertedWord + ".")
}