//Map:
/*
  - Altera o valor do array;
  - Pode ser usada junto com 'filter' e 'reduce'
  - Sempre vai retornar um array com valores alterados
  - return um valor modificado
*/

//      Indice   0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 18, 22, 27]

//Dobre os numeros
const numerosEmDobro = numeros.map((valor) => valor * 2)

console.log(numerosEmDobro);










//---//---//---//---//
const pessoas = [
  { nome: 'Oscar', idade: 35 },
  { nome: 'Amanda', idade: 25},
  { nome: 'Guto', idade: 32},
  { nome: 'Felipe', idade: 30},
  { nome: 'Marina', idade: 28},
  { nome: 'Cris', idade: 30}
]