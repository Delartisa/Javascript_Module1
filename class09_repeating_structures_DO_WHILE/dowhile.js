// ESTRUTURAS DE REPETICAO | DO/WHILE (faca/enquanto)

/*
diferente do while sozinho, o do/while garante que o bloco de codigo sera executado pelo menos uma vez, independentemente da condicao. nele, o do/while so faz a verificacao da condicao depois do bloco ser executado pelo menos uma vez.

faca <bloco_de_comando> enquanto <condicao>

sintaxe:

do{
// ...
} while (condicao)
*/

// exemplo: 

let contador = 0;

do {
    alert("Valor do contador: " + contador);
    contador++;
} while (contador <= 10);

