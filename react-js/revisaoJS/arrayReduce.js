//Reduce:
/*
  - é utilizado para reduzir um array em um unico elemento;
  - é possivel ser usado para filtrar e mapear, mas não é o correto;
  - os dados retornados para a função são: 'acumulador', 'objeto', 'indice' e 'array';
  - o 'acumulador' é opcional, caso não defina será o primeiro indice do array.
*/

//      Indice   0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 18, 22, 27]

//some todos os numeros (reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador = acumulador + valor
  return acumulador
}, 0) //valor '0' refere-se ao valor inicial do meu acumulador.

console.log(total);

//Retorne um array  com os pares (filter)
const pares = numeros.reduce(function (acumulador, valor) {
  if(valor % 2 === 0) {
    acumulador.push(valor)
  }
  return acumulador
}, []) //defini meu acumulador para acumular dentro de um array

console.log(pares);

//reorne um array com o dobro dos valores (map)
const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2)
  return acumulador
}, [])

console.log(dobro);


//---//---//---//---//


const pessoas = [
  { nome: 'Amanda', idade: 25},
  { nome: 'Guto', idade: 32},
  { nome: 'Felipe', idade: 30},
  { nome: 'Oscar', idade: 35 },
  { nome: 'Marina', idade: 28},
  { nome: 'Cris', idade: 30}
]

//retorne a pessoa mais velha

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) {
    return acumulador
  }
  return valor
},/*vazio*/) //ficou vazio para receder os dados do primeiro indice

console.log(maisVelha);