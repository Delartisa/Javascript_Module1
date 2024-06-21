// ESTRUTURAS DE REPETICAO | FOR

/*
um exemplo comum de uso do for e quando queremos reiterar um numero fixo de vezes, como uma vez para cada letra de uma palavra, ou uma vez para cada item da lista.

PARA <inicializacao>; <condicao(resultado booleano)>; FACA <algo>

sintaxe:

for(inicializacao;condicao;finalizacao){
// ...
}
*/

// exemplos:

// contador de 1 a 10

//inicializacao da variavel number / condicao que determina ate que ponto o bloco de comando deve se repetir / a cada repeticao, a variavel number vai receber mais um numero, tornando ela uma especie de contador

for(let number = 0; number <= 10; number++){
    alert("Numero " + number + "\n")
}

// *nao necessariamente precisamos inicializar o for com todos os campos, podemos fazer como no exemplo a seguir:

let indice = 0

// aqui, o alert so vai aparecer uma vez
for(alert("inicializando o for..."); indice <= 10; indice++){
    alert("indice " + indice)
}

// aqui, o segundo alert vai ser mostrado na tela toda vez que o bloco se repetir
for(alert("Inicializando o for..."); indice <= 10; alert("finalizando um bloco de repeticao, indo para o proximo...")){
    alert("Indice " + indice)
    indice++
}

// voce tambem pode preferir por nao escrever nada na finalizacao, como nesse outro caso:

for(alert("Inicializando o for..."); indice <= 10; ){
    alert("Indice " + indice)
    indice++
}

// ou nao escrever nada na inicializacao e nem na finalizacao, mas lembre de que o ponto e virgula precisa estar presente, mesmo que os campos estejam vazios

for( ; indice <= 10; ){
    alert("Indice " + indice)
    indice++
}

// um outro exemplo que vale ser mencionado e a possibilidade de escrever textos letra por letra:

let nome = "isabelle duarte muniz"

for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}
