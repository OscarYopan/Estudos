//Filter + MAP + Reduce:
/*
  - 
*/

//      Indice   0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 18, 22, 27]

//retorne a soma do dobro de todos os valores pares
// - Filtrar Pares;
// = Dobrar os valores;
// - Reduzir (somar tudo).
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador += valor, 0)

console.log(numerosPares);