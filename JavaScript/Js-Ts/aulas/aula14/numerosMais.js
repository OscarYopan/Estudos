// IEE 754-2008 => padrao usado na matematica de JS que pode conter pequenas inconsistencias

let numero1 = 1 //typeof Number
let numero2 = 2.5 //typeof Number
let numero3 = 10.1587924 //typeof Number
let numero4 = 10

//.toString converte  de Number para string mantem o typeof da sua variavel como number
console.log(numero1.toString() + numero2);

//.tostring na variavel para mudar o typeof de number para string
numero1 = numero1.toString()
console.log(typeof numero1)

// Mostrar apenas algumas casas apos o ponto
console.log(numero3.toFixed(2));

// Verificar se é um número inteiro
console.log(Number.isInteger(numero4));

// Identificar se o é NaN
let temporario = numero4 * 'oi'
console.log(Number.isNaN(temporario));

