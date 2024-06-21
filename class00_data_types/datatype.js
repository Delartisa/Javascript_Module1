// TIPOS PRIMITIVOS

// 1. number para numeros | 2. bigint para numeros grandes inteiros (use numero + n)

// exemplos:

let comunNumber = 80;
let bigNumber = 100000000000000000000000000;
let bigNumberPlusN = 100000000000000000000000000n;

console.log(comunNumber);
console.log(bigNumber);
console.log(bigNumberPlusN);

//===========================================================================================================================

/* string para caracteres | podem ser tratados como uma lista de caracteres */

// exemplo:

const nickname = "isabelle";

console.log(nickname);
console.log(nickname.length); // usamos -length- para retornar o tamanho da string

//=============================================================================================================================

// boolean para valor logico (false/true)

//=============================================================================================================================

// undefined para uma variavel sem valor atribuido (com lixo de memoria) e null para uma variavel apenas vazia ("zerada")

// exemplo:

let a;
typeof a;

let b = null;
typeof b;
