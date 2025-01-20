// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var myage = 33 ;
var fatherAge = 67;
if(myage > fatherAge){
  console.log('E maior');
}else if (myage === fatherAge){
  console.log('E igual');
} if (myage < fatherAge){
  console.log('E menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//true
var idade = 28;//true
var possuiDoutorado = false;//false
var empregoFuturo;//indeterminado
var dinheiroNaConta = 0;//false
console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;


if(brasil > china){
  console.log('Brasil tem mais Habitantes')
} else if (china > brasil){
  console.log('China tem mais habitantes')
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}//falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}