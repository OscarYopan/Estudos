let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];

[a, b, c] = letras // lado esquerdo é a desestrururação

console.log(a, b, c);

//--//--//--//--//--//

//      indece:  0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero = numeros[0];
const [segundoNumero, terceiroNumero] = numeros

console.log(primeiroNumero);
console.log(segundoNumero, terceiroNumero);
