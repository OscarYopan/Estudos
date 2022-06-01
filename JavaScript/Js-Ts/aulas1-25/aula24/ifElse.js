//'IF' 'ELSE' 'ELSE IF'
/*
- 'if' pode ser executado sozinho
- 'else' só pode ser usado depois que já foi usado um 'if', pode ser usado uma única vez
- 'else if' posso usar quantas vezes forem necessarias
- pode-se usar somente o 'if' e 'else'
= o código só é executado até achar um consdição verdadeira, o que vier abaixo não será executado.
*/

const hora = 10

if(hora >= 18){
  console.log('Boa noite!');
}else{
  console.log('Bom dia!');
}

const hora2 = 16

if(hora2 > 0 && hora2 < 12){
  console.log('Bom dia!');
}else if(hora2 >= 12 && hora2 < 18){
  console.log('Boa tarde!');
}else if (hora2 > 18 && hora2 <= 24){
  console.log('Boa noite!');
}else{
  console.log('Hora inválida!');
}

const numero = 10

if(numero >= 0 && numero <= 5){
  console.log('O número está entre 0 e 5');
}else if (numero > 5 && numero < 9){
  console.log('O número  está entre 6 e 8');
}else if (numero >= 9 && numero <= 10){
  console.log('O número  está entre 9 e 10');
}else{
  console.log('O numero não atende aos parametros');
}