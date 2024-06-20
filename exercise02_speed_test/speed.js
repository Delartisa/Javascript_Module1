// exercicio 02 | Teste de velocidade

// entrada de dados
const nameFirstVehicle = prompt("Escreva o nome do veiculo 1:");
const firstVehicleSpeed = prompt("Escreva a velocidade do veiculo 1:");
const nameSecondVehicle = prompt("Escreva o nome do veiculo 2:");
const secondVehicleSpeed = prompt("Escreva a velocidade do veiculo 2:");

// declarando variaveis para transformar a velocidade em number
let a = parseFloat(firstVehicleSpeed);
let b = parseFloat(secondVehicleSpeed);

// criando condicoes confome dados de entrada
if(a > b){
    alert(nameFirstVehicle + " e mais rapido que " + nameSecondVehicle + ".");
} else if (b > a){
    alert(nameSecondVehicle + " e mais rapido que " + nameFirstVehicle + ".");
} else if (b == a){
    alert(nameFirstVehicle + " e " + nameSecondVehicle + " possuem a mesma velocidade.");
};

