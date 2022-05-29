//'IF' 'ELSE' 'ELSE IF'
/*
- 'if' pode ser executado sozinho
- 'else' só pode ser usado depois que já foi usado um 'if', pode ser usado uma única vez
- 'else if' posso usar quantas vezes forem necessarias
- pode-se usar somente o 'if' e 'else'
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