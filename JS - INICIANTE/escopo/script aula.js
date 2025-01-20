var i = 0 ;
while (i <= 100) {
  console.log(i);
  i = i + 10;
}

var videoGames = ['Switch', 'PS4', 'XBOX', "3DS", "PSP", "NINTENDO"];

for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === 'XBOX'){
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta,index){
  console.log(fruta, index, frutas)
});