// VARIAVEIS

// -let- (let it change) para variaveis que podem ser alteradas ao longo do codigo 

// exemplo:

let numberLet = 0; // inicializamos a variavel "number" e atribuimos o valor 0 a ela

number = parseFloat(prompt("Insira um numero inteiro aqui:")); // adicionamos um prompt para o usuario inserir os dados solicitados

alert( numberLet + " foi o numero selecionado."); // adicionamos um alert para mostrar o numero selecionado

//=============================================================================================================================

// -const- para variaveis que, uma vez atribuidas algum valor, nao podem ser alteradas ao longo do codigo

// exemplo:

const numberConst = 0; // inicializamos a variavel e a definimos com o valor 0
numberConst += 1; // somamos o valor da variavel +1, mas o resultado nao ira se alterar 

alert("O numero e: " + numberConst); // como visto nesse alert

//=============================================================================================================================

/* 
para nomear uma variavel, nao use: 

1. espacos ou hifens
modo errado = nome do usuario, nome-de-usuario...
modo certo = nome_de_usuario (snake case) ou nomeDeUsuario (camel case)

2. numeros na primeira posicao da variavel
modo errado = 1nome
modo certo = nome1, n0me...

3. acentos
modo errado = usuário
modo certo = usuario

4. caracteres especiais
exemplos = @nome, n#me, nome/...

dica: use nomes significativos para suas variaveis

ex: para uma variavel de nome, nao use ->
let n = "fulano de tal"

use ->
let nomeDeUsuario = "fulano de tal" 
*/





