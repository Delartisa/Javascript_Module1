// OPERADORES E EXPRESSOES

/* 
- operacoes basicas:
1. soma +
2. subtracao - 
3. multiplicacao *
4. divisao /
5. resto da divisao %
*/

// exemplo:

let numberOne = 10;
let numberTwo = 10;
let remnant = numberOne % numberTwo; // variavel remnant recebe o resto da divisao entre numberOne e numberTwo

alert("Restante: " + remnant);

//=============================================================================================================================

/*
- operacoes de atribuicao:
1. recebe =
2. soma (concatena) +=
3. subtracao -=
4. multiplicacao *=
5. divisao /=
6. resto da divisao %=
*/

// exemplo 1
let a = 10;
let b = 10;

a += b; // a variavel "a" recebe o valor de "b" | 10 + 10 = 20 -> a = 20
b += a; // a variavel "b" recebe o valor de "a" | 10 + 20 = 20 -> b = 30

alert("O valor de A e " + a + " e o valor de B e " + b);

// exemplo 2

let c = 10;
let d = 10;

c %= d; // a variavel "c" recebe o resto da divisao entre "c" e "d" | 10 % 10 = 0 -> c = 0

alert("O valor de C e " + c + " e o valor de D e " + d);

