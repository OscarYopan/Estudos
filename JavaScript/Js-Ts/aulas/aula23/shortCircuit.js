// FALSY
/*
- valores que são avaliados como falsos:
  - false
  - 0
  - '' "" ``
  - null / undefined
  - NaN
---------------
  && -> false %% true -> vai retornar 'o valor falso'
        - Caso todos falsos retorna o último valor falso
        - caso algum valro verdadeiro retorna o primeiro valor falso
  || -> true || false -> vai retornar 'o valor verdadeiro'
        - retorna o primeiro valor verdadeiro
*/

function falaOi(){
  return 'oi'  
};

const vaiExecutar = 'oscar'; // curto circuito, quando nao foi preciso criar uma condicional

console.log(vaiExecutar && falaOi());

console.log(vaiExecutar || falaOi());


const a = 0
const b = NaN
const c = 'Juarex'
const d = false
const e = null

console.log(a && b && c && d && e);

console.log(a || b || c || d || e);

