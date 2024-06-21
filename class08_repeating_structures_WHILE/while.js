// ESTRUTURAS DE REPETICAO: WHILE (lacos de repeticao)

/*
serve para executar um mesmo bloco de comandos varias vezes, ate que a condicao se torne falsa

enquanto <condicao> faca <bloco_de_comandos>

**todos os lacos de repeticao aceitam break e estruturas de condicao**

sintaxe:

wwhile(condicao){
// ...
}
*/  

// exemplo:

// inicializamos um contador de 0 a 1
let meter = 0

while(meter <= 10){ // condicao para quando for falsa 
    alert("Numero " + meter)
    meter++
}

alert("Contamos de 0 a 10!")