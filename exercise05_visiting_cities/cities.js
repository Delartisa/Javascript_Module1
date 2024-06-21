// exercicio 05 | Visitando cidades

// entrada de dados
const touristName = prompt("Seja bem vindo ao nosso questionario de turismo!\n\n Qual e seu nome?")
let confirm = prompt("Ja visitou alguma cidade? (S/N)")

// declarando duas variaveis, uma para armazenar o nome das cidades e outra para quantidade de cidades visitadas
let visitedCities = 0
let whatCites = "\n"

// inicializando condicoes para os dados obtidos
while(confirm === "s"){
    whatCites += prompt("Qual?") + "\n"// aqui a variavel vai salvar (concatenar) as cidades visitadas
    visitedCities++ // aqui, a cada repeticao, o contador vai somar uma cidade
    confirm = prompt("Mais alguma? (S/N)") // condicao para o loop continuar sendo verdadeiro ou se tornar falso
}

alert("Dados:\n\n" +
    "Nome do turista: " + touristName + "\n" +
    "Quantidade de cidades visitadas: " + visitedCities + "\n" +
    "Cidades visitadas: " + whatCites + "\n"
)