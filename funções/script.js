// Crie uma função para verificar se um valor é Truthy
function Truthy(dado){
 return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado){
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
  return `${nome} ${sobrenome}`; 
}

// Crie uma função que verifica se um número é par
function numeroPar(numero){
  var result = numero % 2;
  if (result === 0){
    return true;
  }
  else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
  console.log(typeof dado);
}
tipoDado(' ');

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
  addEventListener('scroll', function(){console.log('Diogo de Souza Santos  ')});


// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
  console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}