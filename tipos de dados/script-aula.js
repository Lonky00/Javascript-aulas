var name = "Diogo";
var age = 32;
console.log(typeof name,typeof age);

var surname = 'Souza'

var complet_name = name + ' ' + surname;

console.log(complet_name);

var melhor = 'teste';
var frase1 = 'Esse e o melhor' + melhor + 'JOGO';
console.log(frase1);

var gols = 1000;
var frase2 = 'Romário fez ' + gols + ' gols';
var frase3 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frase2);
console.log(frase3);
