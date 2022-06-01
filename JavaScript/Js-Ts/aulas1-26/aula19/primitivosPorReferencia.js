//DADOS PRIMITIVOS
/*
tipos: string, number, boolean, null e undefined, bigint, symbol
  - trata-se de valores imutaveis
  - valores copiados
*/

let c = 'Oscar'
let d = c //copia o valor da variavel 'c'
console.log(c, d);

c = 'Luis' //somente a variavel 'c' será afetada pois 'c' e 'd' não apontam pro mesmo lugar na memeoria
console.log(c, d);

//DADOS POR REFERENCIA
/* 
tipos: array, object, function
 - trata-se valores mutaveis
 - valores passados por referencia (apotar mesmo local na memoria)
*/
let a = [1, 2, 3]
let b = a
console.log(a, b);

a.push(4) // as duas variaveis serão afetadas, pois ambas apontam pro mesmo lugar na memoria
console.log(a, b);

a.pop() //novamente ambas as variaveis serão afetadas
console.log(a, b);

let e = [11, 12, 13]
let f = [...e] //para copiar uma variavel, quando no use de dados por referencia

console.log(f);
