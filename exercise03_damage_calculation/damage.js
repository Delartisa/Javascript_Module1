// exercicio 03 | Calculo de dano

// entrada de dados para o personagem atacante
const attackingCharacterName = prompt("Escreva o nome do personagem atacante:");
let attackingCharacterPower = parseFloat(prompt("Escreva a quantidade de pontos de ataque dele:"));

// entrada de dados para o personagem defensor
const defenserCharacterName = prompt("Escreva o nome do personagem defensor:");
let defenserCharactereLife = parseFloat(prompt("Escreva a quantidade de pontos de vida dele:"));
let defenserCharacterPower = parseFloat(prompt("Escreva a quantidade de pontos de defesa dele:"));

// declaracao de escudo e dano
const shield = prompt("Possui escudo? (S/N)");
let damage = 0;

// inicializando condicoes para os dados obtidos
if (attackingCharacterPower > defenserCharacterPower && shield === "n"){
    damage += (attackingCharacterPower - defenserCharacterPower);
} else if (attackingCharacterPower > defenserCharacterPower && shield === "s"){
    damage += ((attackingCharacterPower - defenserCharacterPower)/2);
} else {
    damage;
}

// atribuindo o dano aos pontos de vida
defenserCharactereLife -= damage;

// saida de dados para mostrar os status dos personagenns
alert("Quantidade de dano causado por " + attackingCharacterName + ": " + damage);

alert("Status:\n\n" + 
    "Pontos de vida restantes de " + defenserCharacterName + ": " + defenserCharactereLife + "\n" +
    "Pontos de poder de defesa de " + defenserCharacterName + ": " + defenserCharacterPower + "\n" +
    "Usou escudo? " + shield
);
