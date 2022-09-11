//Filter:
/*
  - Filtra o array, ou seja permite criar filtros;
  - Pode ser usada junto com 'map' e 'reduce'
  - Sempre vai retornar um array com a mesma quantidade de elementos ou menos
  - os dados retornados para a função são: 'objeto' 'indice' e 'array'.
  - return boolean
*/

//retorne os numeros maiores que 10

//      Indice   0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 18, 22, 27]

const numerosMaioresQueDez =  numeros.filter((valor) => valor > 10)

console.log(numerosMaioresQueDez);


//---//---//---//---//
const pessoas = [
  { nome: 'Oscar', idade: 35 },
  { nome: 'Amanda', idade: 25},
  { nome: 'Guto', idade: 32},
  { nome: 'Felipe', idade: 30},
  { nome: 'Marina', idade: 28},
  { nome: 'Cris', idade: 30}
]

//retorne as pessoas que tem o nome com 5 letras ou mais
const cincoLetras = pessoas.filter((valor) => valor.nome.length > 4)

console.log(cincoLetras);

//retorne as pessoas com mais a 30 anos

const maisVinteCincoAnos = pessoas.filter((valor) => valor.idade > 30)

console.log(maisVinteCincoAnos);

//pessoas curo o nome termina com a letra 'a'

const letraA = pessoas.filter((valor) => valor.nome.toLocaleLowerCase().endsWith('a'))

console.log(letraA);