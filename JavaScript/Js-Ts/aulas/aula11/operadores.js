/*     Operadores Aritiméticos   */

/*
Ordem  de Precedencia
  ()
  **
  *, /, %
  +, -
  ordem da esquerda pra direita

OBS: NaN significa 'Not a Number'
*/ 

//Adição
const num1 = 5
const num2 = 10
console.log(num1 + num2);

//Concatenação - pois a const num3 é uma string
const num3 = '2'
const num4 = 4
console.log(num3 + num4);

//Subtração
const num5 = 5
const num6 = 10
console.log(num5 - num6);

//Multiplicação
const num7 = 5
const num8 = 10
console.log(num7 * num8);

//Divisão
const num9 = 5
const num10 = 10
console.log(num9 / num10);

//Potenciação
const num11 = 2
const num12 = 10
console.log(num11 ** num12);

//Resto da Divisao
const num13 = 9
const num14 = 2
console.log(num13 % num14);

//Incremento
let contador = 1
contador ++ //++contador (também está coreto)
console.log(contador);

//Decremento
let desContador = 10
desContador -- //--contador (tambem está correto)
console.log(desContador);

//Operadores de Atribuição - valido para qualquer operador aritmetico
let cont = 0
cont += 2
console.log(cont);

//Converter Strings numericas em numeros
const numeroA = parseInt('5.2') //primeira maneira, somente retorna numeros inteiros
console.log(numeroA);
console.log(typeof numeroA);

const numeroB = parseFloat('1.4') //segunda maneira
console.log(numeroB);
console.log(typeof numeroB);

const numeroC = Number('5.4') //terceira maneira = melhor maneira
console.log(numeroC);
console.log(typeof numeroC);

