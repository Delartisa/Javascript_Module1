// ESTRUTURAS CONDICIONAIS: IF/ELSE (se/senao)

/*
- if: pode ser usado sozinho para executar um bloco de comandos caso uma condicao seja verdadeira

sintaxe:
if(condicao === verdadeira){
<bloco_de_comando>
}

*/

// exemplo: 

// entrada de dados
const age = parseFloat(prompt("insira sua idade:"));

if(age > "17"){ // condicao
    alert("Voce e maior de idade!"); // bloco de comando
};

//=============================================================================================================================

/*
- else: usado somente quando ha um if. serve para acrescentar um bloco de comando caso a condicao proposta ao if seja falsa

sintaxe:
if(condicao === verdadeira){
<bloco_de_comando1>
} else {
<bloco_de_comando2>
}

* para facilitar:
se (condicao === verdadeira) entao faca{
<bloco_de_comando_caso_verdadeiro>
} 

senao (condicao === falsa) entao faca{
<bloco_de_comandos_caso_falso>
}
*/

// exemplo:

// entrada de dados
const age1 = parseFloat(prompt("insira sua idade:"));

if(age1 > "17"){ // condicao verdadeira = executa bloco de dados caso verdadeiro
    alert("Voce e maior de idade!");
} else{ // condicao falsa = executa bloco de dados caso falso
    alert("Voce e menor de idade!");
};

// tambem e possivel colocar outros if dentro do proprio if

// exemplo: 

if(age1 > "17"){ 
    alert("Voce e maior de idade!");
} else if(age1 > "10" && age1 < "14"){ 
    alert("Voce e pre-adolescente!");
} else if(age1 > "13" && age1 < "18"){
    alert("Voce e adolescente!");
} else if (age1 < "11"){
    alert("voce e crianca!");
};


/*
operador ternario (forma abreviada do if/else)

sintaxe: const resultado = condicao ? resultado_verdadeiro : resultado_falso
*/

// exemplo:

const finalResult = (6 === 6) ? "true" : "false" // aqui e so um exemplo, voce pode colocar qualquer nome dentro das aspas, so lembre de que o "verdadeiro ou falso" continuam, respectivamente, na ordem.

console.log(finalResult) // retorna true