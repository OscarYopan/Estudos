//ForEach
/*
  - É utilizada para interagir com arrays
  - a função recebe as 'valor', 'indice' e 'array' da array
*/

// indice   0  1  2  3  4  5  6  7  8
const exemplo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let total = 0

//Com Função normal
exemplo1.forEach(function(valor, indice, array) {
  console.log(valor, indice);
})

//Com arrow function

exemplo1.forEach(valor => {
  total += valor
})

console.log(total);