let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];

[a, b, c] = letras // lado esquerdo é a desestrururação

console.log(a, b, c);

//--//--//--//--//--//

//      indece:  0     1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const primeiroNumero = numeros[0];
const [segundoNumero, terceiroNumero, ...resto] = numeros // '...rest' operator pode-se usar tambem o '...spread' operator

console.log(primeiroNumero);
console.log(segundoNumero, terceiroNumero);
console.log(resto);

//--//--//--//--//--//

//      indice            0          1          2
//      indice         0  1  2    0  1  2    0  1  2
const numerosArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numerosArray

console.log(numerosArray[1][2]);
console.log(lista3);
console.log(lista3[2]);

